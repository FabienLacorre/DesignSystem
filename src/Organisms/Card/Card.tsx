import "./card.css";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import clsx from "clsx";
import { Size } from "../../Atoms/_Types/basicTypes";

export const HeaderCard = ({ children }: BasicProps) => {
  return <Box marginBottom="small">{children}</Box>;
};

export const FooterCard = ({ children }: BasicProps) => {
  return <Box marginTop="medium">{children}</Box>;
};

export const Card = ({ children }: BasicProps) => {
  return (
    <Box
      padding="medium"
      className={clsx(["shadow--classic--black", "card--classic--global"])}
    >
      {children}
    </Box>
  );
};
