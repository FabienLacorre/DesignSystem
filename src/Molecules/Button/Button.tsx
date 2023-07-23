import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
interface ButtonProps extends BasicProps {
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({
  children,
  style,
  className,
  icon,
  onClick,
}: ButtonProps) => {
  const buttonPadding = "container--padding--small";
  const iconMarginRight = "container--margin-right--small";

  return (
    <button
      onClick={onClick}
      style={style}
      className={clsx([className, buttonPadding])}
    >
      <Box display="flex-row" alignItems="center">
        {icon && (
          <Box
            style={{ height: 16, width: 16 }}
            className={clsx(iconMarginRight)}
          >
            {icon}
          </Box>
        )}

        <Box>{children}</Box>
      </Box>
    </button>
  );
};
