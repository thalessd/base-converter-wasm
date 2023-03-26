import { HTMLProps } from "react";

function CustomInput(props: HTMLProps<HTMLInputElement>) {
  return <input {...props} />;
}

export default CustomInput;
