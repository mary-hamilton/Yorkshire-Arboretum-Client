import * as React from 'react';

import { useContext, useEffect } from "react";
import AppContext from "./context";
import { Container, Grid } from "@mui/material";
import ASingleSign from "./ASingleSign";

const ViewSigns = () => {

  const { client, signs } = useContext(AppContext);

  useEffect(() => {
    client.getSigns()
  }, [])

  return (
    <Container>
      {signs.map((sign, i) => (
        <ASingleSign sign={sign} key={i} />
      ))}
    </Container>

  )
}
export default ViewSigns;