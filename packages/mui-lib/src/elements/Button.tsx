import styled from "@emotion/styled";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import { ForwardedRef, forwardRef } from "react";

const StyledButton = styled(MuiButton)({
  textTransform: "none",
  boxShadow: "0px 1px 2px rgba(102, 112, 133, 0.1)",
  borderRadius: "6px",
  padding: "10px 24px",
  lineHeight: "20px",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.24px",
  "&:hover": {
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  },
  // small
  "&.MuiButton-sizeSmall": {
    padding: "6px 16px",
  },
  // primary
  "&.MuiButton-contained": {
    color: "var(--whiteColor)",
    backgroundColor: "var(--primaryColor)",
    border: "0.8px var(--primaryColor) solid",
    "&:hover": {
      backgroundColor: "var(--primaryHover)",
    },
    "&:active, &:focus": {
      boxShadow:
        "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px var(--blue25)",
    },
    "&.Mui-disabled": {
      backgroundColor: "var(--disabledButtonColor)",
      borderColor: "var(--disabledButtonColor)",
      color: "var(--whiteColor)",
    },
  },
  // outlined
  "&.MuiButton-outlined": {
    borderColor: "var(--primaryColor)",
    color: "var(--primaryColor)",
    "&:hover": {
      backgroundColor: "var(--blue25)",
    },
    "&:active, &:focus": {
      boxShadow:
        "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px var(--blue25)",
    },
    "&.Mui-disabled": {
      borderColor: "var(--disabledButtonColor)",
      color: "var(--disabledButtonColor)",
      "& svg": {
        stroke: "var(--disabledButtonColor)",
      },
    },
  },
});

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledButton {...props} ref={ref} classes={{}}>
        {props.children}
      </StyledButton>
    );
  }
);
