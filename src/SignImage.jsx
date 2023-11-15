import { useContext } from "react";
import AppContext from "./context";
import Image, { Box } from "@mui/material"

const SignImage = () => {
  const { sign, baseUrl } = useContext(AppContext)

  return (
    <>
      {sign.signImageId && <Box>
        <img data-cy="signImageEl"
             src={`${baseUrl}/sign-images/${sign.signImageId}`}
             alt={`${sign.title}`}
             style={{
               height: 'auto',
               width: 'auto',
               maxWidth: '100%'
             }}/>
      </Box>}
    </>
  )
}

export default SignImage;