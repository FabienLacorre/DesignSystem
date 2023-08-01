import clsx from "clsx";
import "./_Style/input.css";

interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <input className={clsx(["input--classic--global", "input--classic--primary"])} type="text" placeholder={placeholder} />
};
