import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Typography } from "../../Atoms/Typography/Typography";
import { Color, Weight } from "../../Atoms/_Types/basicTypes";

import "./_Style/button.css";

interface ButtonProps extends BasicProps {
  icon?: JSX.Element;
  onClick?: () => void;
  content?: string;
  color?: Color;
  textColor?: Color;
  textWeight?: Weight
}

export const Button = ({
  content,
  style,
  className,
  icon,
  onClick,
  color = "primary",
  textColor = "white",
  textWeight = "bold",
}: ButtonProps) => {
  const buttonPadding = "container--padding--small";
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
        typographyColor,
        buttonType,
        "button--classic--global",
      ])}
    >
      <Box display="flex-row" alignItems="center">
        {icon && (
          <Box className={clsx(iconMarginRight)} display="flex-row">
            {icon}
          </Box>
        )}

        <Typography color={textColor} weight={textWeight}>
          {content}
        </Typography>
      </Box>
    </button>
  );
};
