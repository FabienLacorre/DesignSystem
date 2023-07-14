import { clsx } from "clsx";
import { BasicProps } from "../_Types/basicProps";
import { Display, Padding, Margin, Color } from "../_Types/basicTypes";

interface BoxProps extends BasicProps {
  display?: Display;
  padding?: Padding;
  margin?: Margin;
  fullWidth?: boolean;
  boxColor?: Color;
}

export const Box = ({
  children,
  className,
  style,
  display,
  margin,
  padding,
  fullWidth,
  boxColor,
}: BoxProps): JSX.Element => {
  const boxDisplay = display ? `container--display--${display}` : "";
  const boxMargin = margin ? `container--margin--${margin}` : "";
  const boxPadding = padding ? `container--padding--${padding}` : "";
  const fWidth = fullWidth ? "size--full--width" : "";
  const bColor = boxColor ? `container--color--${boxColor}` : "";

  return (
    <div
      style={style}
      className={clsx([
        className,
        boxDisplay,
        boxMargin,
        boxPadding,
        fWidth,
        bColor,
      ])}
    >
      {children}
    </div>
  );
};
