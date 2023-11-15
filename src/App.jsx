import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Button, Container, Grid, Typography } from "@mui/material";
import Image from 'mui-image'

import AppContext from "./context";
import TreeMenu from "./TreeMenu";
import Login from "./Login";
import PortalHome from "./PortalHome";
import Home from "./Home";
import favicon from "./img/favicon-re.jpeg";
import Signup from "./Signup";
import ChangePassword from "./ChangePassword";
import QrViewer from "./QrViewer";

const App = () => {

  const navigate = useNavigate();

  const { client, token, user } = useContext(AppContext);

  const logout = () => {
    client.logout();
    navigate('/');
  };

  return (
    <Container>
      <header>
        <Grid container alignItems="center">
          <Grid item pl={1} pb={2} pt={2}>
            <Image
              onClick={() => navigate("/")}
              src={favicon}
              style={{ width: '70%', height: 'auto' }}
            />
          </Grid>
          <Grid item flexGrow={1}>
            <Typography variant='h5'>TreeWalk</Typography>
          </Grid>
          {token &&
            <Grid item m={2}>
              <Typography>{`You are logged in as ${user}`}</Typography>
            </Grid>
          }
          {token && (
            <Grid item m={2}>
              <Button data-cy="logout-button" variant="contained" onClick={() => logout()}>Log Out</Button>
            </Grid>
          )}
          <Grid item>
            <TreeMenu/>
          </Grid>
        </Grid>
      </header>
      <main>
        <Routes>
          <Route path="/gatehouse" element={token ? <PortalHome/> : <Login/>}/>
          <Route path="/add-new-user" element={token ? <Signup/> : <Login/>}/>
          <Route path="/change-password" element={token ? <ChangePassword/> : <Login/>}/>
          <Route path="/view-qr/:signId" element={token ? <QrViewer/> : <Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </Container>
  );
};

export default App;
