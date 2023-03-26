import go from "./go";

type BaseConverter = {
  fromBase10ToBase2: (number: number) => string;
  fromBase10ToBase8: (number: number) => string;
  fromBase10ToBase16: (number: number) => string;
  fromBase2ToBase10: (number: string) => number;
  fromBase8ToBase10: (number: string) => number;
  fromBase16ToBase10: (number: string) => number;
};

declare global {
  interface Window {
    baseConverter: BaseConverter;
  }
}

const BASE_CONVERTER_WASM_FILE = "base_converter.wasm";

export async function loadBaseConverter() {
  const result = await WebAssembly.instantiateStreaming(
    fetch(BASE_CONVERTER_WASM_FILE),
    go.importObject
  );
  go.run(result.instance);
}

export function getBaseConverter(): BaseConverter {
  const baseConverter = window.baseConverter;

  if (!baseConverter) {
    throw new Error("baseConverter not loaded");
  }

  return baseConverter;
}
