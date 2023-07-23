import clsx from "clsx";
import { BasicProps } from "../_Types/basicProps";

interface IconProps extends BasicProps {
  path: string;
  height?: string;
  width?: string;
}

export const Icon = ({
  path,
  style,
  className,
  height,
  width,
}: IconProps): JSX.Element => {
  const fullHeightIcon = "size--width--full";
  const fullWidthIcon = "size--height--full";
  return (
    <img
      style={style}
      src={path}
      height={height ? height : "auto"}
      width={width ? width : "auto"}
      className={clsx([className, fullHeightIcon, fullWidthIcon])}
      alt=""
    />
  );
};
