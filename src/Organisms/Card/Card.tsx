import "./card.css";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import clsx from "clsx";

export const HeaderCard = ({ children }: BasicProps) => {
  return (
    <Box marginBottom="small" display="flex-row" alignItems="center">
      {children}
    </Box>
  );
};

export const FooterCard = ({ children }: BasicProps) => {
  return (
    <Box marginTop="medium" display="flex-row" alignItems="center">
      {children}
    </Box>
  );
};

export const Card = ({ children, style }: BasicProps) => {
  return (
    <Box
      style={style}
      padding="medium"
      className={clsx(["shadow--classic--black", "card--classic--global"])}
    >
      {children}
    </Box>
  );
};
