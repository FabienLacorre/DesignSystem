import clsx from "clsx";
import "./_Style/input.css";
import { Color } from "../../Atoms/_Types/basicTypes";

interface InputProps {
  placeholder?: string;
  color?: Color;
  disabled?: boolean;
}

export const Input = ({ placeholder, color = "primary", disabled }: InputProps) => {
  const inputType = `input--classic--${color}`;

  return <input
    disabled={disabled}
    className={clsx(["input--classic--global", inputType])}
    type="text"
    placeholder={placeholder} />
};
