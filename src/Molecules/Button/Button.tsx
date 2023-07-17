import { Grid } from "../../Atoms/Grid/Grid";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Icon } from "../../Atoms/Icon/Icon";
import { Box } from "../../Atoms/Box/Box";
interface ButtonProps extends BasicProps {
  icon?: JSX.Element;
}

export const Button = ({ children, style, className, icon }: ButtonProps) => {
  return (
    <button style={style} className={className}>
      <Box display="flex-row">
        {icon}
        {children}
      </Box>
    </button>
  );
};
