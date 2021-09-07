import MuiButton from "@material-ui/core/Button";
import { ReactChildren } from "react";

export interface ButtonProps {
  children: ReactChildren | string;
  agesss?: number;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return <MuiButton>{children}</MuiButton>;
}

export default Button;
