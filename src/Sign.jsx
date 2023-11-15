import { useParams } from "react-router-dom";
import SignText from "./SignText";
import { useContext, useEffect } from "react";
import AppContext from "./context";
import SignImage from "./SignImage";


const Sign = () => {
  const{client, sign} = useContext(AppContext)
  const {id} = useParams()

  useEffect(() => {
    client.getSign(id)
  }, [])

  return(
    <>
      {sign ?
        <>
          <SignText/>
          <SignImage/>
        </>:
        <p>Loading</p>
      }
    </>
  )
}

export default Sign;