import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "./context";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";

const QrViewer = () => {
  const theme = useTheme();
  const { signId } = useParams();
  const { client, baseUrl, sign } = useContext(AppContext);
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    client.getSign(signId)
  }, [])

  if (!sign) {
    return <Typography pb={1}>Loading ...</Typography>
  }

  return (
    <>
      <Typography variant='h4' pb={1}>QR Code for {sign.title}</Typography>
      <Grid justifyContent="center" container>
        <Grid item>
          <img src={`${baseUrl}/qr-code/${signId}`} data-cy='qr-code' alt="QR code image"
               width={isDesktop ? "" : "80%"}/>
        </Grid>
      </Grid>
    </>
  );
};

export default QrViewer;