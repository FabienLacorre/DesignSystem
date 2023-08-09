import "./card.css";
import { Box } from "../../Atoms/Box/Box";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Typography } from "../../Atoms/Typography/Typography";
import clsx from "clsx";
import { Size } from "../../Atoms/_Types/basicTypes";

interface CardProps extends BasicProps {
  title?: string;
  titleSize?: Size;
}

export const Card = ({ title, children, titleSize = "medium" }: CardProps) => {
  return (
    <Box
      padding="medium"
      className={clsx(["shadow--classic--black", "card--classic--global"])}
    >
      {title && (
        <Box marginBottom="small">
          <Typography weight="bold" size={titleSize}>
            {title}
          </Typography>
        </Box>
      )}
      <Box>{children}</Box>
    </Box>
  );
};
