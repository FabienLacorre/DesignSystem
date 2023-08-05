import { Box } from "../../Atoms/Box/Box"
import { Typography } from "../../Atoms/Typography/Typography"
import { BasicProps } from "../../Atoms/_Types/basicProps";

interface AccordionProps extends BasicProps {
    title: string;
}

export const Accordion = ({ title, children }: AccordionProps) => {
    return (
        <Box>
            {/* HEADER */}
            <Box padding="small" boxColor="primary" onClick={() => alert("THIS IS A TEST")}>
                <Typography>{title}</Typography>
            </Box>
            {/* CONTENT */}
            <Box padding="small" boxColor="warning">
                {children}
            </Box>
        </Box>
    )
}