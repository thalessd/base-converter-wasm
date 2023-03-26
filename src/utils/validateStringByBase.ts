import { Bases } from "../enums/Bases";

export function validateStringByBase(value: string, base: Bases) {
  switch (base) {
    case Bases.BASE2:
      return /^[0-1]+$/.test(value);
    case Bases.BASE8:
      return /^[0-7]+$/.test(value);
    case Bases.BASE10:
      return /^[0-9]+$/.test(value);
    case Bases.BASE16:
      return /^[0-9a-fA-F]+$/.test(value);
    default:
      return false;
  }
}
