// Style common
import "../_Style/index.css";
// Lib
import clsx from "clsx";
// Types
import { BasicProps } from "../_Types/basicProps";
import { Color, Weight, Size } from "../_Types/basicTypes";

interface TypographyProps extends BasicProps {
  color?: Color;
  weight?: Weight;
  size?: Size;
}

/**
 * # The Button component
 * Shows a button
 */
export const Typography = ({
  children,
  style,
  className,
  color = "default",
  weight = "regular",
  size = "medium",
}: TypographyProps): JSX.Element => {
  const typographyColor = color ? `font--color--${color}` : "";
  const typographyWeight = weight ? `font--weight--${weight}` : "";
  const typographySize = size ? `font--size--${size}` : "";

  return (
    <span
      style={style}
      className={clsx([
        className,
        typographyColor,
        typographyWeight,
        typographySize,
      ])}
    >
      {children}
    </span>
  );
};
