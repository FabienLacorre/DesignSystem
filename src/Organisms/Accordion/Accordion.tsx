import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box"
import { Typography } from "../../Atoms/Typography/Typography"
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./accordion.css";
import { useState } from "react";
import { Collapse } from "../../Molecules/Collapse/Collapse";
interface AccordionProps extends BasicProps {
    title: string;
}

export const Accordion = ({ title, children }: AccordionProps) => {
    const titleContainer = "accordion--classic--title-container";

    // LOGICAL
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((openValue: boolean) => !openValue);
    }

    return (
        <Box>
            {/* HEADER */}
            <Box paddingBottom="small" className={clsx([titleContainer])} onClick={handleClick}>
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