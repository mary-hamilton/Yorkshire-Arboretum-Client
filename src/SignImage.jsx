import { useContext } from "react";
import AppContext from "./context";
import { css } from "@emotion/css";

const SignImage = () => {
  const{ sign, baseUrl } = useContext(AppContext)

  return (
      <div className={css`
        width: 100%;
        max-width: 400px;
`}>
      {sign.signImageId && <img
        data-cy="signImageEl"
        src={`${baseUrl}/sign-images/${sign.signImageId}`}
        alt={`${sign.title}`}
          className={css`
            width: 100%;
            object-fit: cover;`}
       />}
      </div>
  )
}

export default SignImage;