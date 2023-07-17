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
  return (
    <img
      style={style}
      src={path}
      height={height}
      width={width}
      className={className}
    />
  );
};
