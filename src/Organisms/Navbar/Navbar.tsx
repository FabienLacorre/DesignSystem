import "./navbar.css";
import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Button } from "../../Molecules/Button/Button";

interface NavbarProps extends BasicProps {}

export const Navbar = ({ className, style }: NavbarProps) => {
  return (
    <Box
      boxColor="white"
      padding="medium"
      style={style}
      className={clsx([
        className,
        "shadow--classic--black",
        "nav-bar--classic--global",
      ])}
      display="flex-row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Button content="MwoneDesign" textSize="medium" borderless />
      </Box>
      <Box>
        <Button content="Home" borderless />
        <Button content="Content" borderless />
        <Button content="About" borderless />
      </Box>
    </Box>
  );
};
