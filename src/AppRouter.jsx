import { Route, Routes } from "react-router-dom";
import PortalHome from "./PortalHome";
import Login from "./Login";
import Home from "./Home";
import { useContext } from "react";
import AppContext from "./context";
import Sign from "./Sign";
import Signup from "./Signup";
import ChangePassword from "./ChangePassword";

const AppRouter = () => {

  const { client, token, user } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/gatehouse" element={token ? <PortalHome/> : <Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signs/:id" element={<Sign/>}/>
      <Route path="/add-new-user" element={token ? <Signup/> : <Login/>}/>
      <Route path="/change-password" element={token ? <ChangePassword/> : <Login/>}/>
    </Routes>
  )
 }

 export default AppRouter;