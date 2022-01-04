import type {Flags} from './NFA';

export default function clearFlag(flags: Flags, clear: Flags): Flags {
  return (flags ^ clear) as Flags;
}
