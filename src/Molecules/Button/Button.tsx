import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Typography } from "../../Atoms/Typography/Typography";
import { Color } from "../../Atoms/_Types/basicTypes";

import "./_Style/button.css";

interface ButtonProps extends BasicProps {
  icon?: JSX.Element;
  onClick?: () => void;
  content?: string;
  color?: Color;
  textColor?: Color;
}

export const Button = ({
  content,
  style,
  className,
  icon,
  onClick,
  color = "primary",
  textColor = "white",
}: ButtonProps) => {
  const buttonPadding = "container--padding--small";
  const iconMarginRight = "container--margin-right--small";
  const buttonType = `button--classic--${color}`;
  const typographyColor = `font--color--${textColor}`;
  return (
    <button
      onClick={onClick}
      style={style}
      className={clsx([className, buttonPadding, typographyColor, buttonType])}
    >
      <Box display="flex-row" alignItems="center">
        {icon && (
          <Box
            style={{ height: 16, width: 16, fill: "white" }}
            className={clsx(iconMarginRight)}
          >
            {icon}
          </Box>
        )}

        <Typography color="white" weight="bold">
          {content}
        </Typography>
      </Box>
    </button>
  );
};
