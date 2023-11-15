import { useContext } from "react";
import AppContext from "./context";
import { Typography } from "@mui/material";
import { css } from "@emotion/css";

const SignText = () => {
  const {sign} = useContext(AppContext)
  return(
    <>
      <p className = {css`font-family: 'Asap', sans-serif; font-size: 28px `}>{sign.title}</p>
      <Typography>{sign.description}</Typography>
    </>
  )
}

export default SignText