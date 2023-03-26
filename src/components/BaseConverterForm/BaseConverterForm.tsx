import { CustomInput } from "../CustomInput";
import { CustomSelect } from "../CustomSelect";
import { FormEvent, useMemo, cloneElement } from "react";
import { Bases } from "../../enums/Bases";

type Props = {
  onBaseSelectInputChange: (value: Bases) => void;
  onBaseSelectOutputChange: (value: Bases) => void;
  baseTextInputValue: string;
  onBaseTextInputChange: (value: string) => void;
  baseTextOutputValue: string;
};

function BaseConverterForm({
  onBaseSelectInputChange,
  onBaseSelectOutputChange,
  baseTextInputValue,
  onBaseTextInputChange,
  baseTextOutputValue,
}: Props) {
  const baseOptions = useMemo(
    () => (
      <>
        <option value={Bases.BASE2}>Base 2</option>
        <option value={Bases.BASE8}>Base 8</option>
        <option value={Bases.BASE10}>Base 10</option>
        <option value={Bases.BASE16}>Base 16</option>
      </>
    ),
    []
  );

  const handleInputBaseSelect = (event: FormEvent<HTMLSelectElement>) => {
    onBaseSelectInputChange(event.currentTarget.value as Bases);
  };

  const handleOutputBaseSelect = (event: FormEvent<HTMLSelectElement>) => {
    onBaseSelectOutputChange(event.currentTarget.value as Bases);
  };

  const handleBaseTextInputChange = (event: FormEvent<HTMLInputElement>) => {
    onBaseTextInputChange(event.currentTarget.value);
  };

  return (
    <div>
      <div>Entrada</div>
      <CustomSelect
        defaultValue={Bases.BASE10}
        onChange={handleInputBaseSelect}
      >
        {cloneElement(baseOptions)}
      </CustomSelect>
      <CustomInput
        value={baseTextInputValue}
        onChange={handleBaseTextInputChange}
      />
      <div>Saida</div>
      <CustomSelect
        defaultValue={Bases.BASE2}
        onChange={handleOutputBaseSelect}
      >
        {baseOptions}
      </CustomSelect>
      <CustomInput
        value={baseTextOutputValue}
        placeholder="Dados de Saida..."
        readOnly
      />
    </div>
  );
}

export default BaseConverterForm;
