import "./layout.css";
import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";

export const Layout = ({ children }: BasicProps) => {
  return <Box className={clsx(["layout--classic--global"])}>{children}</Box>;
};

export const LayoutContent = ({ children }: BasicProps) => {
  return (
    <Box
      className={clsx(["layout--classic--content"])}
      overFlowX="scroll"
      paddingTop="large"
      paddingLeft="large"
      paddingRight="large"
    >
      {children}
    </Box>
  );
};
