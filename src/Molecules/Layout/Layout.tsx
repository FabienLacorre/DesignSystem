import "./layout.css";
import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Color } from "../../Atoms/_Types/basicTypes";

interface LayoutProps extends BasicProps {
  color?: Color;
}
export const Layout = ({ children, color = "primary" }: LayoutProps) => {
  return (
    <Box className={clsx(["layout--classic--global"])} boxColor={color}>
      <Box className={clsx(["layout--classic--content"])}>{children}</Box>
    </Box>
  );
};
