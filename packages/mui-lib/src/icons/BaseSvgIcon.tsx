import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";

const StyledSvgIcon = styled(SvgIcon)((props) => ({
  height: props.height ?? 16,
  width: props.width ?? 16,
  stroke: props.stroke ?? "var(--primaryColor)",
  strokeWidth: props.strokeWidth ?? 1.5,
}));

export const BaseSvgIcon = (props: SvgIconProps) => {
  return <StyledSvgIcon {...props}>{props.children}</StyledSvgIcon>;
};
