import Button from "@material-ui/core/Button";
import React from "react";
import styled from "@material-ui/core/styles/styled";

export const AppButton = styled(Button)((theme) => ({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  "&:focus": {
    outline: "solid 1px #FF8E53",
  },
}));
