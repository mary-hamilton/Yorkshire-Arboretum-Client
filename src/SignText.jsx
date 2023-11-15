import { useContext } from "react";
import AppContext from "./context";
import { Typography } from "@mui/material";

const SignText = () => {
  const {sign} = useContext(AppContext)
  return(
    <>
      <Typography>{sign.title}</Typography>
      <Typography>{sign.description}</Typography>
    </>
  )
}

export default SignText