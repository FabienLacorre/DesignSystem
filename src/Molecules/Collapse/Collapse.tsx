import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box"
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./collapse.css";

interface CollapseProps extends BasicProps {
    isOpen: boolean;
}

export const Collapse = ({ isOpen, children, className, style }: CollapseProps) => {
    return (
        <Box className={clsx([className, "collapse--classic--content", isOpen ? "collapse--classic--content-collapsed" : ""])} style={style}>
            <Box className="collapse--classic--content-box-container">
                {children}
            </Box>
        </Box>
    )
}