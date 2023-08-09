import clsx from "clsx";
import { Box } from "../../Atoms/Box/Box";
import { Typography } from "../../Atoms/Typography/Typography";
import { BasicProps } from "../../Atoms/_Types/basicProps";
import "./accordion.css";
import { useEffect, useState } from "react";
import { Collapse } from "../../Molecules/Collapse/Collapse";
import { IoMdArrowDropright } from "react-icons/io";
import { Color } from "../../Atoms/_Types/basicTypes";

export interface AccordionProps extends BasicProps {
  color?: Color;
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
  isBottomBorder?: boolean;
  shadowed?: boolean;
}

export const Accordion = ({
  color = "primary",
  title,
  children,
  isOpen = false,
  onClick,
  className,
  style,
  isBottomBorder = false,
  shadowed = true,
}: AccordionProps) => {
  // CLASSES
  const accordionColorDivider = `accordion--classic--${color}-divider`;
  const accordionIsBottomBorder =
    isBottomBorder === false ? `accordion--no-border--global` : "";
  const shadowedClass = shadowed ? `shadow--classic--black` : "";
  // LOGICAL
  const [iconRotationClass, setIconRotationClass] = useState("");

  useEffect(() => {
    setIconRotationClass(isOpen ? "rotateNinety" : "rotateNinetyToDefault");
  }, [isOpen]);

  return (
    <Box className={clsx([className, shadowedClass])} style={style}>
      {/* HEADER */}

      <Box
        display="flex-row"
        alignItems="center"
        paddingBottom="small"
        paddingTop="small"
        className={clsx([
          "accordion--classic--title-container",
          `accordion--classic--${color}-title-container`,
          accordionIsBottomBorder,
          accordionColorDivider,
        ])}
        onClick={onClick}
      >
        <IoMdArrowDropright
          className={clsx([
            "font--size--large",
            `accordion--classic--${color}-icon`,
            iconRotationClass,
          ])}
        />
        <Typography userSelect={false} weight="bold">
          {title}
        </Typography>
      </Box>

      {/* CONTENT */}

      <Collapse isOpen={isOpen}>
        <Box paddingBottom="small" paddingTop="small" paddingLeft="small">
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};
