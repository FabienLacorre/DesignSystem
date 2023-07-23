import clsx from "clsx";
import { BasicProps } from "../_Types/basicProps";
import { Color, Size } from "../_Types/basicTypes";

interface IconProps extends BasicProps {
  svg: React.ReactNode;
  size: Size;
  color?: Color;
}

export const Icon = ({
  svg,
  style,
  className,
  color,
  size = "small",
}: IconProps): JSX.Element => {
  const fillColor = `font--fill--${color}`;
  const sizeHeightIcon = `size--height--${size}`;
  const sizeWidthIcon = `size--width--${size}`;
  return (
    <svg
      className={clsx([className, fillColor, sizeHeightIcon, sizeWidthIcon])}
      style={{ ...style }}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {svg}
    </svg>
  );
};
