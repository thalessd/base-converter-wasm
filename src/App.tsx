import React from "react";
import { Home } from "./pages/Home";
import useLoadBaseConverter from "./hooks/useLoadBaseConverter";
import { BaseConverterLoading } from "./components/BaseConverterLoading";

function App() {
  const { baseConverterIsLoaded, baseConverterError } = useLoadBaseConverter();

  if (!baseConverterIsLoaded) {
    return <BaseConverterLoading />;
  }

  if (baseConverterError) {
    return <div>Error loading base converter</div>;
  }

  return <Home />;
}

export default App;
