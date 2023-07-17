import { clsx } from "clsx";
import { BasicProps } from "../_Types/basicProps";
import { GridGap, GridFlow } from "../_Types/basicTypes";

interface GridProps extends BasicProps {
  gap: GridGap;
  flow: GridFlow;
}

export const Grid = ({
  children,
  className,
  style,
  flow,
  gap,
}: GridProps): JSX.Element => {
  const boxFlow = flow ? `container--grid--flow-${flow}` : "";
  const boxGap = gap ? `container--grid--gap-${gap}` : "";
  return (
    <div
      style={style}
      className={clsx([className, "container--grid--display", boxGap, boxFlow])}
    >
      {children}
    </div>
  );
};
