import { BasicProps } from "../../Atoms/_Types/basicProps";
import { Box } from "../../Atoms/Box/Box";
import clsx from "clsx";
import { Color } from "../../Atoms/_Types/basicTypes";

import "./alert.css";
import { Typography } from "../../Atoms/Typography/Typography";
import { IconType } from "react-icons";

interface AlertProps extends BasicProps {
    content: string
    color?: Color,
    outlined?: boolean,
    Icon?: IconType
}

export const Alert = ({
    content,
    style,
    className,
    color = "primary",
    outlined = false,
    Icon,
}: AlertProps) => {
    const alertType = outlined === false ? `alert--classic--${color}` : `alert--outlined--${color}`;
    const iconMarginRight = "container--margin-right--small";
    return (
        <Box className={clsx([
            className,
            "alert--classic--global",
            alertType
        ])} style={style}>
            <Box display="flex-row" alignItems="center">
                {Icon && (
                    <Box className={clsx(iconMarginRight)} display="flex-row">
                        <Icon />
                    </Box>

                )}
                <Typography>
                    {content}
                </Typography>
            </Box>

        </Box>
    );
};
