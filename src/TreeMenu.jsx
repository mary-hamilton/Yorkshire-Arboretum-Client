import { useContext, useState } from "react";
import AppContext from "./context";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Box, Grid,
  Link,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css"


const TreeMenu = () => {
  const { token } = useContext(AppContext)
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const menuCSS = css`
    border-top: 2px solid #AEB491;
    margin-bottom: 5vh;
  `


  const menuItems = [
    { title: "HOME", visible: true, path: "/", external: false },
    { title: "PORTAL HOME", visible: token, path: "/gatehouse", external: false },
    { title: "ADD ADMIN", visible: token, dataCy: "add-new-user", path: "/add-new-user", external: false },
    { title: "ACCOUNT", visible: token, dataCy: "change-password", path: "/change-password", external: false },
    {
      title: "THE YORKSHIRE ARBORETUM",
      visible: true,
      dataCy: "",
      path: "https://www.yorkshirearboretum.org/",
      external: true
    },
    {
      title: "EVENTS CALENDAR",
      visible: true,
      dataCy: "",
      path: "https://www.yorkshirearboretum.org/events",
      external: true
    }
  ]

  return (
    <>
      <Accordion expanded={expanded}
                 elevation={0}
                 square
                 sx={{backgroundColor: '#F4F2EC'}}
                 className={menuCSS}
                 >
        <AccordionSummary
          display="flex"
          justify="center"
          sx={{borderBottom: 2, borderColor: '#AEB491'}}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
          <Typography justify="center" data-cy="menu" onClick={() => setExpanded(!expanded)}>MENU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container
                direction="column"
                alignItems="center"
                justify="center">
            {menuItems.map((menuItem, i) => (
              (menuItem.visible !== undefined && menuItem.visible !== null) &&
              <Grid item
                    xs={12} key={i} >
                {
                  menuItem.external ?
                    <Link onClick={() => setExpanded(false)}
                          href={menuItem.path}
                          target="_blank"
                          rel="noreferrer">{menuItem.title}</Link> :
                    <Link data-cy={menuItem.dataCy}
                          onClick={() => {
                      navigate(menuItem.path);
                      setExpanded(false)
                    }}
                    >{menuItem.title}</Link>
                }
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>

  )
    ;
}

export default TreeMenu;