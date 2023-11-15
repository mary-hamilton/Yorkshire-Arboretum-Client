import { useContext, useState } from "react";
import AppContext from "./context";
import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const TreeMenu = () => {
  const { token } = useContext(AppContext)
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        data-cy="menu"
      >
        <MenuIcon/>
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link onClick={() => navigate("/")}>Home</Link>
        </MenuItem>
        {token && (
          <MenuItem onClick={handleClose}>
            <Link onClick={() => navigate("/gatehouse")}>Portal Home</Link>
          </MenuItem>
        )}
        {token && (
          <MenuItem onClick={handleClose}>
            <Link data-cy="add-new-user" onClick={() => navigate("/add-new-user")}>Add Admin</Link>
          </MenuItem>
        )}
        {token && (
          <MenuItem onClick={handleClose}>
            <Link data-cy="change-password" onClick={() => navigate("/change-password")}>Account</Link>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default TreeMenu;