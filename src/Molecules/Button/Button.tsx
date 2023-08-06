import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Typography } from "../../Atoms/Typography/Typography";
import { Color, Size, Weight } from "../../Atoms/_Types/basicTypes";

import "./_Style/button.css";

interface ButtonProps extends BasicProps {
  Icon?: any;
  onClick?: () => void;
  content?: string;
  color?: Color;
  textColor?: Color;
  textWeight?: Weight
  textSize?: Size,
}

export const Button = ({
  content,
  style,
  className,
  Icon,
  onClick,
  color = "primary",
  textColor = "white",
  textWeight = "bold",
  textSize = "small",
}: ButtonProps) => {
  const buttonPadding = "container--padding--small";
  const buttonPaddingRight = "container--padding-right--medium";
  const buttonPaddingLeft = "container--padding-left--medium";
  const iconMarginRight = "container--margin-right--small";
  const buttonType = `button--classic--${color}`;
  const typographyColor = `font--color--${textColor}`;

  return (
    <button
      onClick={onClick}
      style={style}
      className={clsx([
        className,
        buttonPadding,
        buttonPaddingRight,
        buttonPaddingLeft,
        typographyColor,
        buttonType,
        "button--classic--global",
      ])}
    >
      <Box display="flex-row" alignItems="center">
        {Icon && (
          <Box className={clsx(iconMarginRight)} display="flex-row">
            <Icon />
          </Box>
        )}

        <Typography color={textColor} weight={textWeight} size={textSize}>
          {content}
        </Typography>
      </Box>
    </button>
  );
};
