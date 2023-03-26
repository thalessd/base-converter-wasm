import "./Home.css";
import { BaseConverterForm } from "../../components/BaseConverterForm";
import { useCallback, useEffect, useState } from "react";
import { Bases } from "../../enums/Bases";
import { validateStringByBase } from "../../utils/validateStringByBase";
import { baseConverterHandler } from "../../utils/baseConverterHandler";

function Home() {
  const [baseInput, setBaseInput] = useState<Bases>(Bases.BASE10);
  const [baseOutput, setBaseOutput] = useState<Bases>(Bases.BASE2);
  const [baseInputValue, setBaseInputValue] = useState<string>("");
  const [baseOutputValue, setBaseOutputValue] = useState<string>("");

  useEffect(() => {
    const transformedValue = baseConverterHandler(
      baseInputValue,
      baseInput,
      baseOutput
    );
    setBaseOutputValue(transformedValue);
  }, [baseInputValue, baseInput, baseOutput]);

  const handleBaseSelectInputChange = (value: Bases) => {
    if (value !== baseInput) {
      setBaseInputValue("");
    }

    setBaseInput(value);
  };
  const handleBaseSelectOutputChange = (value: Bases) => {
    setBaseOutput(value);
  };

  const handleBaseTextInputChange = useCallback(
    (value: string) => {
      const inputIsValid = validateStringByBase(value, baseInput);

      if (!inputIsValid && value !== "") {
        return;
      }

      setBaseInputValue(value);
    },
    [baseInput]
  );

  return (
    <div className="Home-root">
      <BaseConverterForm
        onBaseSelectInputChange={handleBaseSelectInputChange}
        onBaseSelectOutputChange={handleBaseSelectOutputChange}
        onBaseTextInputChange={handleBaseTextInputChange}
        baseTextInputValue={baseInputValue}
        baseTextOutputValue={baseOutputValue}
      />
    </div>
  );
}
export default Home;
