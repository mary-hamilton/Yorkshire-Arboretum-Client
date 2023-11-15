import { Typography } from "@mui/material";
import ViewSigns from "./ViewSigns";

const PortalHome = () => {

  return (
    <>
      <Typography variant="h4">Welcome to the staff portal</Typography>
      <Typography m={1}>This is where you can create new signs, change existing ones or add new admins.</Typography>

      <Typography variant="h5" m={1}>Create a new sign</Typography>
      <Typography m={1}>Details coming soon ...</Typography>

      <Typography variant="h5" m={1}>View or edit an exiting sign</ Typography>
      <Typography m={1}>Details coming soon ...</Typography>

      <Typography variant="h5" m={1}>Create a new admin</Typography>
      <Typography m={1}>To create a new admin click on <b>Add Admin</b> in the drop-down menu.
        The username must be unique and the password must be at least 8 characters long, containing at least 1 uppercase,
        lowercase and number.
        Ensure you remember the password so that you can give it to the new user.
        Users can change their own password when they log in.</Typography>

      <Typography variant="h5" m={1}>Change your password</Typography>
      <Typography m={1}>To change your password click on <b>Account</b> in a drop-down menu.
        Under <b>Change Password</b> enter your new password.
        The password must be at least 8 characters long, containing at least 1 uppercase, lowercase and number.</Typography>
    </>
  )
}

export default PortalHome
