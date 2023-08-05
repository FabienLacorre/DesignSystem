import { clsx } from "clsx";
import { BasicProps } from "../_Types/basicProps";
import {
  Display,
  Padding,
  Margin,
  Color,
  JustifyContent,
  AlignItems,
} from "../_Types/basicTypes";

interface BoxProps extends BasicProps {
  display?: Display;
  padding?: Padding;
  margin?: Margin;
  fullWidth?: boolean;
  boxColor?: Color;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  height?: number;
  width?: number;
  onClick?: () => void;
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
  justifyContent,
  alignItems,
  height,
  width,
  onClick,
}: BoxProps): JSX.Element => {
  const boxDisplay = display ? `container--display--${display}` : "";
  const boxMargin = margin ? `container--margin--${margin}` : "";
  const boxPadding = padding ? `container--padding--${padding}` : "";
  const fWidth = fullWidth ? "size--width--full" : "";
  const bColor = boxColor ? `container--background-color--${boxColor}` : "";
  const boxJustifyContent = justifyContent
    ? `container--justify-content--${justifyContent}`
    : "";
  const boxAlignItems = alignItems
    ? `container--align-items--${alignItems}`
    : "";

  return (
    <div
      onClick={onClick}
      style={{ ...style, height: height, width: width }}
      className={clsx([
        onClick !== undefined ? "general--cursor--pointer" : "",
        className,
        boxDisplay,
        boxMargin,
        boxPadding,
        fWidth,
        bColor,
        boxJustifyContent,
        boxAlignItems,
      ])}
    >
      {children}
    </div>
  );
};
