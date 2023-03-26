import { HTMLProps } from "react";

function CustomSelect(props: HTMLProps<HTMLSelectElement>) {
  return <select {...props} />;
}

export default CustomSelect;
