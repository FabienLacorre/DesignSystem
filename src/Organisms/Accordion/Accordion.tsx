import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box"
import { Typography } from "../../Atoms/Typography/Typography"
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./accordion.css";
import { useEffect, useState } from "react";
import { Collapse } from "../../Molecules/Collapse/Collapse";
import { IoMdArrowDropright } from "react-icons/io";
import { Color } from "../../Atoms/_Types/basicTypes";

export interface AccordionProps extends BasicProps {
    color?: Color,
    title: string;
    isOpen?: boolean;
    onClick?: () => void;
}

export const Accordion = ({ color = "primary", title, children, isOpen = false, onClick }: AccordionProps) => {
    // CLASSES
    const accordionColorDivider = `accordion--classic--${color}-divider`;

    // LOGICAL
    const [iconRotationClass, setIconRotationClass] = useState("");

    useEffect(() => {
        setIconRotationClass(isOpen ? "rotateNinety" : "rotateNinetyToDefault")
    }, [isOpen])

    return (
        <Box>
            {/* HEADER */}
            <Box display="flex-row" alignItems="center" paddingBottom="small" paddingTop="small"
                className={clsx([
                    "accordion--classic--title-container",
                    `accordion--classic--${color}-title-container`,
                    accordionColorDivider,
                ])}
                onClick={onClick}>
                <IoMdArrowDropright
                    className={clsx([
                        "font--size--large",
                        iconRotationClass,
                        `accordion--classic--${color}-icon`
                    ])} />
                <Typography userSelect={false} weight="bold">{title}</Typography>
            </Box>
            {/* CONTENT */}
            <Collapse isOpen={isOpen}>
                <Box paddingBottom="small" paddingTop="small">
                    {children}
                </Box>
            </Collapse>
        </Box>
    )
}