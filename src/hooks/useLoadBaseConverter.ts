import { useEffect, useState } from "react";
import { loadBaseConverter } from "../utils/baseConverter";

type HookReturn = {
  baseConverterIsLoaded: boolean;
  baseConverterError?: Error;
};

export default function useLoadBaseConverter(): HookReturn {
  const [baseConverterIsLoaded, setBaseConverterIsLoaded] = useState(false);
  const [baseConverterError, setBaseConverterError] = useState<Error>();

  useEffect(() => {
    loadBaseConverter().then(
      () => {
        setBaseConverterIsLoaded(true);
        setBaseConverterError(undefined);
      },
      (e) => {
        setBaseConverterIsLoaded(false);
        setBaseConverterError(e);
      }
    );
  }, []);

  return {
    baseConverterIsLoaded,
    baseConverterError,
  };
}
