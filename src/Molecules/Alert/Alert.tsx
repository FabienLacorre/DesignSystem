import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Color } from "../../Atoms/_Types/basicTypes";

import "./alert.css";
import { Typography } from "../../Atoms/Typography/Typography";

interface AlertProps extends BasicProps {
    content: string
    color?: Color,
}

export const Alert = ({
    content,
    style,
    className,
    color = "primary",
}: AlertProps) => {

    const alertType = `alert--classic--${color}`;
    return (
        <Box className={clsx([
            className,
            "alert--classic--global",
            alertType
        ])} style={style}>
            <Typography>
                {content}
            </Typography>
        </Box>
    );
};
