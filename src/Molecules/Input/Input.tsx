import clsx from "clsx";
import "./input.css";
import { Color } from "../../Atoms/_Types/basicTypes";
import { BasicProps } from "../../Atoms/_Types/basicProps";

interface InputProps extends BasicProps {
  placeholder?: string;
  color?: Color;
  disabled?: boolean;
}

export const Input = ({
  placeholder,
  color = "default",
  disabled,
  className,
  style,
}: InputProps) => {
  const inputType = `input--classic--${color}`;

  return (
    <input
      style={style}
      disabled={disabled}
      className={clsx([className, "input--classic--global", inputType])}
      type="text"
      placeholder={placeholder}
    />
  );
};
