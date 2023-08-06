import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Typography } from "../../Atoms/Typography/Typography";
import { Color, Size, Weight } from "../../Atoms/_Types/basicTypes";

import "./button.css";

interface ButtonProps extends BasicProps {
  Icon?: any;
  onClick?: () => void;
  content?: string;
  color?: Color;
  textColor?: Color;
  textWeight?: Weight
  textSize?: Size,
  outlined?: boolean;
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
  outlined = false,
}: ButtonProps) => {
  const buttonPadding = "container--padding--small";
  const buttonPaddingRight = "container--padding-right--medium";
  const buttonPaddingLeft = "container--padding-left--medium";
  const iconMarginRight = "container--margin-right--small";
  const typographyColor = `font--color--${textColor}`;

  let buttonType = `button--classic--${color}`;
  if (outlined) {
    buttonType = `button--outlined--${color}`;
  }


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

        <Typography weight={textWeight} size={textSize}>
          {content}
        </Typography>
      </Box>
    </button>
  );
};
