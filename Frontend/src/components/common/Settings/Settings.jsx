// // import React, { useState } from "react";
// // import {
// //   Box,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Divider,
// //   Avatar,
// //   Typography,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogContentText,
// //   DialogActions,
// //   TextField,
// //   Button,
// //   IconButton,
// //   Collapse,
// //   Snackbar,
// //   Alert,
// // } from "@mui/material";
// // import {
// //   AccountCircle,
// //   Edit,
// //   Logout,
// //   ContactMail,
// //   Help,
// //   Close,
// //   Settings as SettingsIcon,
// //   Lock,
// //   ExpandMore,
// //   ExpandLess,
// // } from "@mui/icons-material";
// // import { authService } from "../../../services/authService";
// // import EditProfile from "../../../components/common/Profile/ProfileEdit";
// // const Settings = () => {
// //   const [openProfileDialog, setOpenProfileDialog] = useState(false);
// //   const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
// //   const [passwordOpen, setPasswordOpen] = useState(false);
// //   const [userInfo, setUserInfo] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     avatarUrl: "",
// //   });
// //   const [passwordInfo, setPasswordInfo] = useState({
// //     currentPassword: "",
// //     newPassword: "",
// //     confirmPassword: "",
// //   });
// //   const [snackbar, setSnackbar] = useState({
// //     open: false,
// //     message: "",
// //     severity: "success",
// //   });
// //   const [editProfileOpen, setEditProfileOpen] = useState(false);
// //   const handleProfileUpdate = (updatedUser) => {
// //     setUserInfo({
// //       ...userInfo,
// //       name: updatedUser.name,
// //       email: updatedUser.email,
// //       avatarUrl: updatedUser.avatarUrl || userInfo.avatarUrl,
// //     });
// //     setSnackbar({
// //       open: true,
// //       message: "Profile updated successfully",
// //       severity: "success",
// //     });
// //   };
// //   const handleOpenProfileDialog = () => {
// //     setOpenProfileDialog(true);
// //   };

// //   const handleCloseProfileDialog = () => {
// //     setOpenProfileDialog(false);
// //   };

// //   const handleOpenPasswordDialog = () => {
// //     setOpenPasswordDialog(true);
// //   };

// //   const handleClosePasswordDialog = () => {
// //     setOpenPasswordDialog(false);
// //     setPasswordInfo({
// //       currentPassword: "",
// //       newPassword: "",
// //       confirmPassword: "",
// //     });
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserInfo((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handlePasswordChange = (e) => {
// //     const { name, value } = e.target;
// //     setPasswordInfo((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSaveProfile = () => {
// //     console.log("Saved user info:", userInfo);
// //     handleCloseProfileDialog();
// //   };

// //   const handleChangePassword = async () => {
// //     if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
// //       setSnackbar({
// //         open: true,
// //         message: "New passwords don't match!",
// //         severity: "error",
// //       });
// //       return;
// //     }

// //     try {
// //       const response = await authService.changePassword(
// //         passwordInfo.currentPassword,
// //         passwordInfo.newPassword,
// //         passwordInfo.confirmPassword
// //       );

// //       if (response.success) {
// //         setSnackbar({
// //           open: true,
// //           message: response.message,
// //           severity: "success",
// //         });
// //         handleClosePasswordDialog();
// //       }
// //     } catch (error) {
// //       setSnackbar({
// //         open: true,
// //         message: error.message || "Failed to change password",
// //         severity: "error",
// //       });
// //     }
// //   };

// //   const handleLogout = () => {
// //     console.log("User logged out");
// //   };

// //   const handleContact = () => {
// //     console.log("Contact clicked");
// //   };

// //   const handleHelp = () => {
// //     console.log("Help clicked");
// //   };

// //   const handleSnackbarClose = () => {
// //     setSnackbar({ ...snackbar, open: false });
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 700, py: 5 }}>
// //       <Typography
// //         variant="h6"
// //         gutterBottom
// //         sx={{ display: "flex", alignItems: "start" }}
// //       >
// //         <SettingsIcon sx={{ mr: 1 }} /> Settings
// //       </Typography>

// //       <List>
// //         {/* Profile Section */}
// //         <ListItem button onClick={() => setEditProfileOpen(true)}>
// //           <ListItemIcon>
// //             <Avatar
// //               src={userInfo.avatarUrl}
// //               alt={userInfo.name}
// //               sx={{ width: 33, height: 33 }}
// //             />
// //           </ListItemIcon>
// //           <ListItemText
// //             primary="Profile"
// //             secondary={`${userInfo.name} - ${userInfo.email}`}
// //           />
// //           <Edit color="action" />
// //         </ListItem>
// //         <EditProfile
// //           open={editProfileOpen}
// //           onClose={(success) => {
// //             setEditProfileOpen(false);
// //             if (success) {
// //               handleProfileUpdate(); // Call your update handler if needed
// //             }
// //           }}
// //           user={userInfo}
// //         />
// //         <Divider sx={{ my: 1 }} />
// //         {/* Password Section */}
// //         <ListItem button onClick={() => setPasswordOpen(!passwordOpen)}>
// //           <ListItemIcon>
// //             <Lock color="primary" />
// //           </ListItemIcon>
// //           <ListItemText primary="Password" />
// //           {passwordOpen ? <ExpandLess /> : <ExpandMore />}
// //         </ListItem>
// //         <Collapse in={passwordOpen} timeout="auto" unmountOnExit>
// //           <Box sx={{ pl: 4, pr: 2, pt: 1, pb: 2 }}>
// //             <Button
// //               fullWidth
// //               variant="outlined"
// //               onClick={handleOpenPasswordDialog}
// //             >
// //               Change Password
// //             </Button>
// //           </Box>
// //         </Collapse>

// //         <Divider sx={{ my: 1 }} />

// //         {/* Contact */}
// //         <ListItem button onClick={handleContact}>
// //           <ListItemIcon>
// //             <ContactMail color="primary" />
// //           </ListItemIcon>
// //           <ListItemText primary="Contact Us" />
// //         </ListItem>
// //         <Divider sx={{ my: 1 }} />

// //         {/* Help */}
// //         <ListItem button onClick={handleHelp}>
// //           <ListItemIcon>
// //             <Help color="primary" />
// //           </ListItemIcon>
// //           <ListItemText primary="Help & Support" />
// //         </ListItem>
// //       </List>
// //       <Divider sx={{ my: 1 }} />

// //       {/* Logout */}
// //       <ListItem button onClick={handleLogout}>
// //         <ListItemIcon>
// //           <Logout color="error" />
// //         </ListItemIcon>
// //         <ListItemText
// //           primary="Logout"
// //           primaryTypographyProps={{ color: "error" }}
// //         />
// //       </ListItem>

// //       {/* Profile Edit Dialog */}
// //       <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog}>
// //         <DialogTitle
// //           sx={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <span>Edit Profile</span>
// //           <IconButton onClick={handleCloseProfileDialog}>
// //             <Close />
// //           </IconButton>
// //         </DialogTitle>
// //         <DialogContent>
// //           <Box
// //             sx={{
// //               maxWidth: 700,
// //               display: "flex",
// //               flexDirection: "column",
// //               alignItems: "center",
// //               p: 2,
// //             }}
// //           >
// //             <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
// //               {userInfo.name.charAt(0)}
// //             </Avatar>
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="Full Name"
// //               name="name"
// //               value={userInfo.name}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="Email"
// //               name="email"
// //               type="email"
// //               value={userInfo.email}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="Phone Number"
// //               name="phone"
// //               value={userInfo.phone}
// //               onChange={handleInputChange}
// //             />
// //           </Box>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseProfileDialog}>Cancel</Button>
// //           <Button
// //             onClick={handleSaveProfile}
// //             variant="contained"
// //             color="primary"
// //           >
// //             Save Changes
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Change Password Dialog */}
// //       <Dialog open={openPasswordDialog} onClose={handleClosePasswordDialog}>
// //         <DialogTitle
// //           sx={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <span>Change Password</span>
// //           <IconButton onClick={handleClosePasswordDialog}>
// //             <Close />
// //           </IconButton>
// //         </DialogTitle>
// //         <DialogContent>
// //           <Box sx={{ p: 2 }}>
// //             <DialogContentText sx={{ mb: 3 }}>
// //               Please enter your current password and set a new password.
// //             </DialogContentText>
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="Current Password"
// //               name="currentPassword"
// //               type="password"
// //               value={passwordInfo.currentPassword}
// //               onChange={handlePasswordChange}
// //               required
// //             />
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="New Password"
// //               name="newPassword"
// //               type="password"
// //               value={passwordInfo.newPassword}
// //               onChange={handlePasswordChange}
// //               required
// //             />
// //             <TextField
// //               margin="normal"
// //               fullWidth
// //               label="Confirm New Password"
// //               name="confirmPassword"
// //               type="password"
// //               value={passwordInfo.confirmPassword}
// //               onChange={handlePasswordChange}
// //               required
// //               error={passwordInfo.newPassword !== passwordInfo.confirmPassword}
// //               helperText={
// //                 passwordInfo.newPassword !== passwordInfo.confirmPassword
// //                   ? "Passwords don't match"
// //                   : ""
// //               }
// //             />
// //           </Box>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClosePasswordDialog}>Cancel</Button>
// //           <Button
// //             onClick={handleChangePassword}
// //             variant="contained"
// //             color="primary"
// //             disabled={
// //               !passwordInfo.currentPassword ||
// //               !passwordInfo.newPassword ||
// //               !passwordInfo.confirmPassword ||
// //               passwordInfo.newPassword !== passwordInfo.confirmPassword
// //             }
// //           >
// //             Change Password
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Snackbar for notifications */}
// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={6000}
// //         onClose={handleSnackbarClose}
// //         anchorOrigin={{ vertical: "top", horizontal: "center" }}
// //       >
// //         <Alert
// //           onClose={handleSnackbarClose}
// //           severity={snackbar.severity}
// //           sx={{ width: "100%" }}
// //         >
// //           {snackbar.message}
// //         </Alert>
// //       </Snackbar>
// //     </Box>
// //   );
// // };

// // export default Settings;

// // // import React, { useState } from "react";
// // // import {
// // //   Box,
// // //   List,
// // //   ListItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Divider,
// // //   Avatar,
// // //   Typography,
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogContentText,
// // //   DialogActions,
// // //   TextField,
// // //   Button,
// // //   IconButton,
// // //   Collapse,
// // //   Snackbar,
// // //   Alert,
// // // } from "@mui/material";
// // // import {
// // //   AccountCircle,
// // //   Edit,
// // //   Logout,
// // //   ContactMail,
// // //   Help,
// // //   Close,
// // //   Settings as SettingsIcon,
// // //   Lock,
// // //   ExpandMore,
// // //   ExpandLess,
// // // } from "@mui/icons-material";
// // // import { authService } from "../../../services/authService";

// // // const Settings = () => {
// // //   const [openProfileDialog, setOpenProfileDialog] = useState(false);
// // //   const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
// // //   const [passwordOpen, setPasswordOpen] = useState(false);
// // //   const [userInfo, setUserInfo] = useState({
// // //     name: "John Doe",
// // //     email: "john.doe@example.com",
// // //     phone: "",
// // //     avatarUrl: "https://example.com/avatar.jpg",
// // //   });
// // //   const [passwordInfo, setPasswordInfo] = useState({
// // //     currentPassword: "",
// // //     newPassword: "",
// // //     confirmPassword: "",
// // //   });
// // //   const [snackbar, setSnackbar] = useState({
// // //     open: false,
// // //     message: "",
// // //     severity: "success",
// // //   });

// // //   const handleOpenProfileDialog = () => {
// // //     setOpenProfileDialog(true);
// // //   };

// // //   const handleCloseProfileDialog = () => {
// // //     setOpenProfileDialog(false);
// // //   };

// // //   const handleOpenPasswordDialog = () => {
// // //     setOpenPasswordDialog(true);
// // //   };

// // //   const handleClosePasswordDialog = () => {
// // //     setOpenPasswordDialog(false);
// // //     setPasswordInfo({
// // //       currentPassword: "",
// // //       newPassword: "",
// // //       confirmPassword: "",
// // //     });
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setUserInfo((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handlePasswordChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setPasswordInfo((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSaveProfile = () => {
// // //     console.log("Saved user info:", userInfo);
// // //     handleCloseProfileDialog();
// // //   };

// // //   const handleChangePassword = async () => {
// // //     if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: "New passwords don't match!",
// // //         severity: "error",
// // //       });
// // //       return;
// // //     }

// // //     try {
// // //       const response = await authService.changePassword(
// // //         passwordInfo.currentPassword,
// // //         passwordInfo.newPassword,
// // //         passwordInfo.confirmPassword
// // //       );

// // //       if (response.success) {
// // //         setSnackbar({
// // //           open: true,
// // //           message: response.message,
// // //           severity: "success",
// // //         });
// // //         handleClosePasswordDialog();
// // //       }
// // //     } catch (error) {
// // //       setSnackbar({
// // //         open: true,
// // //         message: error.message || "Failed to change password",
// // //         severity: "error",
// // //       });
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     console.log("User logged out");
// // //   };

// // //   const handleContact = () => {
// // //     console.log("Contact clicked");
// // //   };

// // //   const handleHelp = () => {
// // //     console.log("Help clicked");
// // //   };

// // //   const handleSnackbarClose = () => {
// // //     setSnackbar({ ...snackbar, open: false });
// // //   };

// // //   return (
// // //     <Box sx={{ maxWidth: 700, py: 5 }}>
// // //       <Typography
// // //         variant="h6"
// // //         gutterBottom
// // //         sx={{ display: "flex", alignItems: "start" }}
// // //       >
// // //         <SettingsIcon sx={{ mr: 1 }} /> Settings
// // //       </Typography>

// // //       <List>
// // //         {/* Profile Section */}
// // //         <ListItem button onClick={handleOpenProfileDialog}>
// // //           <ListItemIcon>
// // //             <Avatar
// // //               src={userInfo.avatarUrl}
// // //               alt={userInfo.name}
// // //               sx={{ width: 33, height: 33 }}
// // //             />
// // //           </ListItemIcon>
// // //           <ListItemText
// // //             primary="Profile"
// // //             secondary={`${userInfo.name} - ${userInfo.email}`}
// // //           />
// // //           <Edit color="action" />
// // //         </ListItem>

// // //         <Divider sx={{ my: 1 }} />

// // //         {/* Password Section */}
// // //         <ListItem button onClick={() => setPasswordOpen(!passwordOpen)}>
// // //           <ListItemIcon>
// // //             <Lock color="primary" />
// // //           </ListItemIcon>
// // //           <ListItemText primary="Password" />
// // //           {passwordOpen ? <ExpandLess /> : <ExpandMore />}
// // //         </ListItem>
// // //         <Collapse in={passwordOpen} timeout="auto" unmountOnExit>
// // //           <Box sx={{ pl: 4, pr: 2, pt: 1, pb: 2 }}>
// // //             <Button
// // //               fullWidth
// // //               variant="outlined"
// // //               onClick={handleOpenPasswordDialog}
// // //             >
// // //               Change Password
// // //             </Button>
// // //           </Box>
// // //         </Collapse>

// // //         <Divider sx={{ my: 1 }} />

// // //         {/* Contact */}
// // //         <ListItem button onClick={handleContact}>
// // //           <ListItemIcon>
// // //             <ContactMail color="primary" />
// // //           </ListItemIcon>
// // //           <ListItemText primary="Contact Us" />
// // //         </ListItem>
// // //         <Divider sx={{ my: 1 }} />

// // //         {/* Help */}
// // //         <ListItem button onClick={handleHelp}>
// // //           <ListItemIcon>
// // //             <Help color="primary" />
// // //           </ListItemIcon>
// // //           <ListItemText primary="Help & Support" />
// // //         </ListItem>
// // //       </List>
// // //       <Divider sx={{ my: 1 }} />

// // //       {/* Logout */}
// // //       <ListItem button onClick={handleLogout}>
// // //         <ListItemIcon>
// // //           <Logout color="error" />
// // //         </ListItemIcon>
// // //         <ListItemText
// // //           primary="Logout"
// // //           primaryTypographyProps={{ color: "error" }}
// // //         />
// // //       </ListItem>

// // //       {/* Profile Edit Dialog */}
// // //       <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog}>
// // //         <DialogTitle
// // //           sx={{
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //           }}
// // //         >
// // //           <span>Edit Profile</span>
// // //           <IconButton onClick={handleCloseProfileDialog}>
// // //             <Close />
// // //           </IconButton>
// // //         </DialogTitle>
// // //         <DialogContent>
// // //           <Box
// // //             sx={{
// // //               maxWidth: 700,
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               alignItems: "center",
// // //               p: 2,
// // //             }}
// // //           >
// // //             <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
// // //               {userInfo.name.charAt(0)}
// // //             </Avatar>
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="Full Name"
// // //               name="name"
// // //               value={userInfo.name}
// // //               onChange={handleInputChange}
// // //             />
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="Email"
// // //               name="email"
// // //               type="email"
// // //               value={userInfo.email}
// // //               onChange={handleInputChange}
// // //             />
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="Phone Number"
// // //               name="phone"
// // //               value={userInfo.phone}
// // //               onChange={handleInputChange}
// // //             />
// // //           </Box>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleCloseProfileDialog}>Cancel</Button>
// // //           <Button
// // //             onClick={handleSaveProfile}
// // //             variant="contained"
// // //             color="primary"
// // //           >
// // //             Save Changes
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Change Password Dialog */}
// // //       <Dialog open={openPasswordDialog} onClose={handleClosePasswordDialog}>
// // //         <DialogTitle
// // //           sx={{
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //           }}
// // //         >
// // //           <span>Change Password</span>
// // //           <IconButton onClick={handleClosePasswordDialog}>
// // //             <Close />
// // //           </IconButton>
// // //         </DialogTitle>
// // //         <DialogContent>
// // //           <Box sx={{ p: 2 }}>
// // //             <DialogContentText sx={{ mb: 3 }}>
// // //               Please enter your current password and set a new password.
// // //             </DialogContentText>
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="Current Password"
// // //               name="currentPassword"
// // //               type="password"
// // //               value={passwordInfo.currentPassword}
// // //               onChange={handlePasswordChange}
// // //               required
// // //             />
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="New Password"
// // //               name="newPassword"
// // //               type="password"
// // //               value={passwordInfo.newPassword}
// // //               onChange={handlePasswordChange}
// // //               required
// // //             />
// // //             <TextField
// // //               margin="normal"
// // //               fullWidth
// // //               label="Confirm New Password"
// // //               name="confirmPassword"
// // //               type="password"
// // //               value={passwordInfo.confirmPassword}
// // //               onChange={handlePasswordChange}
// // //               required
// // //               error={passwordInfo.newPassword !== passwordInfo.confirmPassword}
// // //               helperText={
// // //                 passwordInfo.newPassword !== passwordInfo.confirmPassword
// // //                   ? "Passwords don't match"
// // //                   : ""
// // //               }
// // //             />
// // //           </Box>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleClosePasswordDialog}>Cancel</Button>
// // //           <Button
// // //             onClick={handleChangePassword}
// // //             variant="contained"
// // //             color="primary"
// // //             disabled={
// // //               !passwordInfo.currentPassword ||
// // //               !passwordInfo.newPassword ||
// // //               !passwordInfo.confirmPassword ||
// // //               passwordInfo.newPassword !== passwordInfo.confirmPassword
// // //             }
// // //           >
// // //             Change Password
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Snackbar for notifications */}
// // //       <Snackbar
// // //         open={snackbar.open}
// // //         autoHideDuration={6000}
// // //         onClose={handleSnackbarClose}
// // //         anchorOrigin={{ vertical: "top", horizontal: "center" }}
// // //       >
// // //         <Alert
// // //           onClose={handleSnackbarClose}
// // //           severity={snackbar.severity}
// // //           sx={{ width: "100%" }}
// // //         >
// // //           {snackbar.message}
// // //         </Alert>
// // //       </Snackbar>
// // //     </Box>
// // //   );
// // // };

// // // export default Settings;
// import React, { useState } from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   TextField,
//   Button,
//   IconButton,
//   Collapse,
//   Snackbar,
//   Alert,
//   Paper,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   AccountCircle,
//   Edit,
//   Logout,
//   ContactMail,
//   Help,
//   Close,
//   Settings as SettingsIcon,
//   Lock,
//   ExpandMore,
//   ExpandLess,
//   Security,
//   Notifications,
//   Palette,
//   Language,
// } from "@mui/icons-material";
// import { authService } from "../../../services/authService";
// import EditProfile from "../../../components/common/Profile/ProfileEdit";

// const Settings = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [openProfileDialog, setOpenProfileDialog] = useState(false);
//   const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
//   const [passwordOpen, setPasswordOpen] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     avatarUrl: "",
//   });
//   const [passwordInfo, setPasswordInfo] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });
//   const [editProfileOpen, setEditProfileOpen] = useState(false);

//   const handleProfileUpdate = (updatedUser) => {
//     setUserInfo({
//       ...userInfo,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       avatarUrl: updatedUser.avatarUrl || userInfo.avatarUrl,
//     });
//     setSnackbar({
//       open: true,
//       message: "Profile updated successfully",
//       severity: "success",
//     });
//   };

//   const handleOpenPasswordDialog = () => {
//     setOpenPasswordDialog(true);
//   };

//   const handleClosePasswordDialog = () => {
//     setOpenPasswordDialog(false);
//     setPasswordInfo({
//       currentPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     });
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordInfo((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleChangePassword = async () => {
//     if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
//       setSnackbar({
//         open: true,
//         message: "New passwords don't match!",
//         severity: "error",
//       });
//       return;
//     }

//     try {
//       const response = await authService.changePassword(
//         passwordInfo.currentPassword,
//         passwordInfo.newPassword,
//         passwordInfo.confirmPassword
//       );

//       if (response.success) {
//         setSnackbar({
//           open: true,
//           message: response.message,
//           severity: "success",
//         });
//         handleClosePasswordDialog();
//       }
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: error.message || "Failed to change password",
//         severity: "error",
//       });
//     }
//   };

//   const handleLogout = () => {
//     console.log("User logged out");
//   };

//   const handleContact = () => {
//     console.log("Contact clicked");
//   };

//   const handleHelp = () => {
//     console.log("Help clicked");
//   };

//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Box sx={{ maxWidth: 800, mx: "auto", p: isMobile ? 2 : 4 }}>
//       <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>
//         <Box
//           sx={{
//             backgroundColor: theme.palette.primary.main,
//             color: theme.palette.primary.contrastText,
//             p: 3,
//           }}
//         >
//           <Typography
//             variant="h5"
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             <SettingsIcon sx={{ mr: 2, fontSize: "2rem" }} />
//             Account Settings
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
//             Manage your account settings and preferences
//           </Typography>
//         </Box>

//         <Box sx={{ p: isMobile ? 1 : 3 }}>
//           <List disablePadding>
//             {/* Profile Section */}
//             <ListItem
//               button
//               onClick={() => setEditProfileOpen(true)}
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Avatar
//                   src={userInfo.avatarUrl}
//                   alt={userInfo.name}
//                   sx={{
//                     width: 40,
//                     height: 40,
//                     bgcolor: theme.palette.secondary.main,
//                   }}
//                 >
//                   {userInfo.name.charAt(0)}
//                 </Avatar>
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Profile
//                   </Typography>
//                 }
//                 secondary={`${userInfo.name} • ${userInfo.email}`}
//                 secondaryTypographyProps={{ color: "text.secondary" }}
//               />
//               <Edit color="action" />
//             </ListItem>

//             <EditProfile
//               open={editProfileOpen}
//               onClose={(success) => {
//                 setEditProfileOpen(false);
//                 if (success) {
//                   handleProfileUpdate();
//                 }
//               }}
//               user={userInfo}
//             />

//             <Divider sx={{ my: 1 }} />

//             {/* Security Section */}
//             <ListItem
//               button
//               onClick={() => setPasswordOpen(!passwordOpen)}
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Security color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Security
//                   </Typography>
//                 }
//               />
//               {passwordOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>

//             <Collapse in={passwordOpen} timeout="auto" unmountOnExit>
//               <Box sx={{ pl: 9, pr: 2, pt: 1, pb: 2 }}>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     Enhance your account security
//                   </Typography>
//                 </Box>
//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   startIcon={<Lock />}
//                   onClick={handleOpenPasswordDialog}
//                   sx={{
//                     justifyContent: "flex-start",
//                     py: 1.5,
//                     textTransform: "none",
//                   }}
//                 >
//                   Change Password
//                 </Button>
//               </Box>
//             </Collapse>

//             <Divider sx={{ my: 1 }} />

//             {/* Preferences Section */}
//             <ListItem
//               button
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Palette color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Appearance
//                   </Typography>
//                 }
//                 secondary="Theme and display settings"
//                 secondaryTypographyProps={{ color: "text.secondary" }}
//               />
//             </ListItem>

//             <Divider sx={{ my: 1 }} />

//             {/* Notifications */}
//             <ListItem
//               button
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Notifications color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Notifications
//                   </Typography>
//                 }
//                 secondary="Manage alerts and notifications"
//                 secondaryTypographyProps={{ color: "text.secondary" }}
//               />
//             </ListItem>

//             <Divider sx={{ my: 1 }} />

//             {/* Language */}
//             <ListItem
//               button
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Language color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Language
//                   </Typography>
//                 }
//                 secondary="English (United States)"
//                 secondaryTypographyProps={{ color: "text.secondary" }}
//               />
//             </ListItem>

//             <Divider sx={{ my: 1 }} />

//             {/* Help & Support */}
//             <ListItem
//               button
//               onClick={handleHelp}
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Help color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Help & Support
//                   </Typography>
//                 }
//               />
//             </ListItem>

//             <Divider sx={{ my: 1 }} />

//             {/* Contact */}
//             <ListItem
//               button
//               onClick={handleContact}
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <ContactMail color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography variant="subtitle1" fontWeight="medium">
//                     Contact Us
//                   </Typography>
//                 }
//               />
//             </ListItem>

//             <Divider sx={{ my: 1 }} />

//             {/* Logout */}
//             <ListItem
//               button
//               onClick={handleLogout}
//               sx={{
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: theme.palette.error.light,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 48 }}>
//                 <Logout color="error" />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography
//                     color="error"
//                     variant="subtitle1"
//                     fontWeight="medium"
//                   >
//                     Logout
//                   </Typography>
//                 }
//               />
//             </ListItem>
//           </List>
//         </Box>
//       </Paper>

//       {/* Change Password Dialog */}
//       <Dialog
//         open={openPasswordDialog}
//         onClose={handleClosePasswordDialog}
//         fullWidth
//         maxWidth="sm"
//       >
//         <DialogTitle
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             bgcolor: theme.palette.primary.main,
//             color: theme.palette.primary.contrastText,
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Lock sx={{ mr: 1 }} />
//             Change Password
//           </Box>
//           <IconButton
//             onClick={handleClosePasswordDialog}
//             sx={{ color: theme.palette.primary.contrastText }}
//           >
//             <Close />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent sx={{ p: 3 }}>
//           <Box sx={{ mt: 2 }}>
//             <DialogContentText sx={{ mb: 3 }}>
//               For security reasons, please enter your current password before
//               setting a new one.
//             </DialogContentText>
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Current Password"
//               name="currentPassword"
//               type="password"
//               value={passwordInfo.currentPassword}
//               onChange={handlePasswordChange}
//               required
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               label="New Password"
//               name="newPassword"
//               type="password"
//               value={passwordInfo.newPassword}
//               onChange={handlePasswordChange}
//               required
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Confirm New Password"
//               name="confirmPassword"
//               type="password"
//               value={passwordInfo.confirmPassword}
//               onChange={handlePasswordChange}
//               required
//               error={passwordInfo.newPassword !== passwordInfo.confirmPassword}
//               helperText={
//                 passwordInfo.newPassword !== passwordInfo.confirmPassword
//                   ? "Passwords don't match"
//                   : " "
//               }
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 0 }}>
//           <Button
//             onClick={handleClosePasswordDialog}
//             variant="outlined"
//             sx={{ mr: 2 }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleChangePassword}
//             variant="contained"
//             color="primary"
//             disabled={
//               !passwordInfo.currentPassword ||
//               !passwordInfo.newPassword ||
//               !passwordInfo.confirmPassword ||
//               passwordInfo.newPassword !== passwordInfo.confirmPassword
//             }
//           >
//             Update Password
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Settings;
import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Collapse,
  Snackbar,
  Alert,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AccountCircle,
  Edit,
  Logout,
  ContactMail,
  Help,
  Close,
  Settings as SettingsIcon,
  Lock,
  ExpandMore,
  ExpandLess,
  Security,
} from "@mui/icons-material";
import { authService } from "../../../services/authService";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import EditProfile from "../../../components/common/Profile/ProfileEdit";

const Settings = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const handleProfileUpdate = (updatedUser) => {
    setSnackbar({
      open: true,
      message: "Profile updated successfully",
      severity: "success",
    });
  };

  const handleOpenPasswordDialog = () => {
    setOpenPasswordDialog(true);
  };

  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
    setPasswordInfo({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePassword = async () => {
    if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
      setSnackbar({
        open: true,
        message: "New passwords don't match!",
        severity: "error",
      });
      return;
    }

    try {
      const response = await authService.changePassword(
        passwordInfo.currentPassword,
        passwordInfo.newPassword,
        passwordInfo.confirmPassword
      );

      if (response.success) {
        setSnackbar({
          open: true,
          message: response.message,
          severity: "success",
        });
        handleClosePasswordDialog();
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "Failed to change password",
        severity: "error",
      });
    }
  };

  const handleContact = () => {
    console.log("Contact clicked");
  };

  const handleHelp = () => {
    console.log("Help clicked");
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: isMobile ? 2 : 4 }}>
      <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <SettingsIcon sx={{ mr: 2, fontSize: "2rem" }} />
            Account Settings
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
            Manage your account settings and preferences
          </Typography>
        </Box>

        <Box sx={{ p: isMobile ? 1 : 3 }}>
          <List disablePadding>
            {/* Profile Section */}
            <ListItem
              button
              onClick={() => setEditProfileOpen(true)}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                <Avatar
                  src={user?.avatarUrl}
                  alt={user?.name}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: theme.palette.secondary.main,
                  }}
                >
                  {user?.name?.charAt(0)}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Profile
                  </Typography>
                }
                secondary={`${user?.name} • ${user?.email}`}
                secondaryTypographyProps={{ color: "text.secondary" }}
              />
              <Edit color="action" />
            </ListItem>

            <EditProfile
              open={editProfileOpen}
              onClose={(success) => {
                setEditProfileOpen(false);
                if (success) {
                  handleProfileUpdate();
                }
              }}
              user={user}
            />

            <Divider sx={{ my: 1 }} />

            {/* Security Section */}
            <ListItem
              button
              onClick={() => setPasswordOpen(!passwordOpen)}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                <Security color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Security
                  </Typography>
                }
              />
              {passwordOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={passwordOpen} timeout="auto" unmountOnExit>
              <Box sx={{ pl: 9, pr: 2, pt: 1, pb: 2 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Enhance your account security
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Lock />}
                  onClick={handleOpenPasswordDialog}
                  sx={{
                    justifyContent: "flex-start",
                    py: 1.5,
                    textTransform: "none",
                  }}
                >
                  Change Password
                </Button>
              </Box>
            </Collapse>

            <Divider sx={{ my: 1 }} />

            {/* Help & Support */}
            <ListItem
              button
              onClick={handleHelp}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                <Help color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Help & Support
                  </Typography>
                }
              />
            </ListItem>

            <Divider sx={{ my: 1 }} />

            {/* Contact */}
            <ListItem
              button
              onClick={handleContact}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                <ContactMail color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Contact Us
                  </Typography>
                }
              />
            </ListItem>

            <Divider sx={{ my: 1 }} />

            {/* Logout */}
            <ListItem
              button
              onClick={logout}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.error.light,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                <Logout color="error" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    color="error"
                    variant="subtitle1"
                    fontWeight="medium"
                  >
                    Logout
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Paper>

      {/* Change Password Dialog */}
      <Dialog
        open={openPasswordDialog}
        onClose={handleClosePasswordDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Lock sx={{ mr: 1 }} />
            Change Password
          </Box>
          <IconButton
            onClick={handleClosePasswordDialog}
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ mt: 2 }}>
            <DialogContentText sx={{ mb: 3 }}>
              For security reasons, please enter your current password before
              setting a new one.
            </DialogContentText>
            <TextField
              margin="normal"
              fullWidth
              label="Current Password"
              name="currentPassword"
              type="password"
              value={passwordInfo.currentPassword}
              onChange={handlePasswordChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="New Password"
              name="newPassword"
              type="password"
              value={passwordInfo.newPassword}
              onChange={handlePasswordChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={passwordInfo.confirmPassword}
              onChange={handlePasswordChange}
              required
              error={passwordInfo.newPassword !== passwordInfo.confirmPassword}
              helperText={
                passwordInfo.newPassword !== passwordInfo.confirmPassword
                  ? "Passwords don't match"
                  : " "
              }
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={handleClosePasswordDialog}
            variant="outlined"
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleChangePassword}
            variant="contained"
            color="primary"
            disabled={
              !passwordInfo.currentPassword ||
              !passwordInfo.newPassword ||
              !passwordInfo.confirmPassword ||
              passwordInfo.newPassword !== passwordInfo.confirmPassword
            }
          >
            Update Password
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Settings;
