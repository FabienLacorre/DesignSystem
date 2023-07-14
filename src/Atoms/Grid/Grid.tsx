import { clsx } from "clsx";
import { BasicProps } from "../_Types/basicProps";
import { GridGap, GridFlow } from "../_Types/basicTypes";

interface GridProps extends BasicProps {
  gridGap: GridGap;
  gridFlow: GridFlow;
}

export const Grid = ({
  children,
  className,
  style,
  gridFlow,
  gridGap,
}: GridProps): JSX.Element => {
  const boxFlow = gridFlow ? `container--grid--flow-${gridFlow}` : "";
  const boxGap = gridGap ? `container--grid--gap-${gridGap}` : "";
  return (
    <div
      style={style}
      className={clsx([className, "container--grid--display", boxGap, boxFlow])}
    >
      {children}
    </div>
  );
};
