import type {Flags} from './NFA';

export default function setFlag(flags: Flags, set: Flags): Flags {
  return (flags | set) as Flags;
}
