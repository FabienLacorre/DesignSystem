import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Color, Size } from "../../Atoms/_Types/basicTypes";
import "./spinner.css";

interface SpinnerProps extends BasicProps {
  color?: Color;
  size?: Size;
}

export const Spinner = ({ color = "primary", size = "medium" }) => {
  const spinnerType = `spinner--classic--${size}-${color}`;
  const spinnerGlobal = `spinner--classic--${size}-global`;

  return <Box className={clsx([spinnerGlobal, spinnerType])} />;
};
