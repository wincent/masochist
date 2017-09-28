/**
 * @flow
 */

import {Readable} from 'stream';
import escapeHTML from './escapeHTML';
import raw from './raw';

function squishWhitespace(string: string): string {
  return string.replace(/\s*\n\s*/g, '');
}

export default function template(strings, ...args) {
  // Make one interpolated array of strings and args to make later processing
  // easier.
  const items = [];
  for (let i = 0; i < strings.length; i++) {
    items.push(raw(squishWhitespace(strings[i])));
    if (i < args.length) {
      items.push(args[i]);
    }
  }

  let waiting = false;
  const chunks = [];

  return new Readable({
    read(size) {
      let buffering = false;

      // Flush any previously dumped chunks.
      while (chunks.length) {
        if (!this.push(chunks.shift())) {
          return;
        }
      }

      const tick = () => {
        while (items.length) {
          if (waiting) {
            return;
          }

          const item = items.shift();
          if (item == null) {
            continue;
          } else if (typeof item === 'string') {
            if (!this.push(escapeHTML(item))) {
              return;
            }
          } else if (typeof item === 'object' && item.hasOwnProperty('__safe')) {
            if (!this.push(item.__safe)) {
              return;
            }
          } else if (typeof item.then === 'function') {
            // Quacks like a Promise.
            waiting = true;
            item.then(value => {
              waiting = false;
              items.unshift(value);
              process.nextTick(tick);
            })
            .catch(err => {
              process.nextTick(() => this.emit('error', err));
            });
            return;
          } else if (
            typeof item.on === 'function' &&
            typeof item.pipe === 'function'
          ) {
            // Quacks like a stream.
            waiting = true;
            item.on('data', data => {
              const string = data.toString();
              if (buffering) {
                chunks.push(string);
              } else {
                if (!this.push(string)) {
                  buffering = true;
                }
              }
            });
            item.on('end', () => {
              waiting = false;
              if (!buffering) {
                process.nextTick(tick);
              }
            });
            item.on('err', err => {
              process.nextTick(() => this.emit('error', err));
            });
            return;
          } else {
            // User passed 0, false, NaN, or something truthy
            // that didn't get caught by duck-typing checks; coerce to string.
            const string = '' + item;
            if (!this.push(string)) {
              return;
            }
          }
        }
        this.push(null);
      }

      tick();
    }
  });
}
