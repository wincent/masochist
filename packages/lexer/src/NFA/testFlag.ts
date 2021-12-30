import type {Flags} from './NFA';

export default function testFlag(flags: Flags, test: Flags): boolean {
  return !!(flags & test);
}
