import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box"
import { Typography } from "../../Atoms/Typography/Typography"
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./accordion.css";
import { useEffect, useState } from "react";
import { Collapse } from "../../Molecules/Collapse/Collapse";
import { IoMdArrowDropright } from "react-icons/io";
import { Color } from "../../Atoms/_Types/basicTypes";

interface AccordionProps extends BasicProps {
    color?: Color,
    title: string;
}

export const Accordion = ({ color = "primary", title, children }: AccordionProps) => {
    // CLASSES
    const accordionColorDivider = `accordion--classic--${color}-divider`;

    // LOGICAL
    const [isOpen, setIsOpen] = useState(false);
    const [iconRotationClass, setIconRotationClass] = useState("");

    const handleClick = () => {
        setIsOpen((openValue) => !openValue);
    }

    useEffect(() => {
        if (isOpen === undefined) {
            return;
        }
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
                onClick={handleClick}>
                <IoMdArrowDropright
                    className={clsx([
                        "font--size--large",
                        iconRotationClass,
                        `accordion--classic--${color}-icon`
                    ])} />
                <Typography weight="bold">{title}</Typography>
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