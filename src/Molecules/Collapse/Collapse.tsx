import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box"
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./collapse.css";

interface CollapseProps extends BasicProps {
    isOpen: boolean;
}

export const Collapse = ({ isOpen, children }: CollapseProps) => {
    return (
        <Box className={clsx(["collapse--classic--content", isOpen ? "collapse--classic--content-collapsed" : ""])}>
            <Box className="collapse--classic--content-box-container">
                {children}
            </Box>
        </Box>
    )
}