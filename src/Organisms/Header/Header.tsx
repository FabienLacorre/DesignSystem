import { Box } from "../../Atoms/Box/Box";
import { Typography } from "../../Atoms/Typography/Typography";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Color } from "../../Atoms/_Types/basicTypes";

interface HeaderProps extends BasicProps {
  boxColor?: Color;
  textColor?: Color;
  title?: string;
}
export const Header = ({
  children,
  boxColor,
  textColor,
  title,
}: HeaderProps): JSX.Element => {
  return (
    <Box fullWidth boxColor={boxColor} padding="large">
      <Typography color={textColor} weight="bold">
        {title}
      </Typography>
      {children}
    </Box>
  );
};
