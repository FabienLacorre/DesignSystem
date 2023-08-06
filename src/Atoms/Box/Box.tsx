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
  paddingTop?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
  paddingRight?: Padding;
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
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fullWidth,
  boxColor,
  justifyContent,
  alignItems,
  height,
  width,
  onClick,
}: BoxProps): JSX.Element => {
  // DISPLAY
  const boxDisplay = display ? `container--display--${display}` : "";
  // WIDTH
  const fWidth = fullWidth ? "size--width--full" : "";
  // COLORS
  const bColor = boxColor ? `container--background-color--${boxColor}` : "";
  // JUSTIFY CONTENT
  const boxJustifyContent = justifyContent ? `container--justify-content--${justifyContent}` : "";
  // ALIGN ITEMS
  const boxAlignItems = alignItems ? `container--align-items--${alignItems}` : "";
  // PADDINGS
  const boxMargin = margin ? `container--margin--${margin}` : "";
  const boxPadding = padding ? `container--padding--${padding}` : "";
  const boxPaddingTop = paddingTop ? `container--padding-top--${paddingTop}` : "";
  const boxPaddingBottom = paddingBottom ? `container--padding-bottom--${paddingBottom}` : "";
  const boxPaddingLeft = paddingLeft ? `container--padding-left--${paddingLeft}` : "";
  const boxPaddingRight = paddingRight ? `container--padding-right--${paddingRight}` : "";

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
        boxPaddingTop,
        boxPaddingBottom,
        boxPaddingLeft,
        boxPaddingRight,
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
