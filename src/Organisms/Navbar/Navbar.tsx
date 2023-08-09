import "./navbar.css";
import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";

interface NavbarProps extends BasicProps {}

export const Navbar = ({ className, style }: NavbarProps) => {
  return (
    <Box
      padding="medium"
      style={style}
      className={clsx([className, "shadow--classic--black"])}
    >
      this is a navbar test
    </Box>
  );
};
