import { Bases } from "../enums/Bases";
import { getBaseConverter } from "./baseConverter";

export function baseConverterHandler(
  value: string,
  baseInput: Bases,
  baseOutput: Bases
): string {
  if (baseInput === baseOutput) return value;
  if (value === "") return "0";

  const valueInBase10 = convertToBase10(value, baseInput);

  return convertFromBase10(valueInBase10, baseOutput);
}

function convertToBase10(value: string, base: Bases): number {
  const { fromBase2ToBase10, fromBase8ToBase10, fromBase16ToBase10 } =
    getBaseConverter();

  switch (base) {
    case Bases.BASE2:
      return fromBase2ToBase10(value);
    case Bases.BASE8:
      return fromBase8ToBase10(value);
    case Bases.BASE10:
      return parseInt(value, 10);
    case Bases.BASE16:
      return fromBase16ToBase10(value);
  }
}

function convertFromBase10(value: number, base: Bases): string {
  const { fromBase10ToBase2, fromBase10ToBase8, fromBase10ToBase16 } =
    getBaseConverter();

  switch (base) {
    case Bases.BASE2:
      return fromBase10ToBase2(value);
    case Bases.BASE8:
      return fromBase10ToBase8(value);
    case Bases.BASE10:
      return value.toString().toLowerCase();
    case Bases.BASE16:
      return fromBase10ToBase16(value);
  }
}
