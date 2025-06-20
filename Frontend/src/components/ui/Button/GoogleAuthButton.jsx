// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { Google as GoogleIcon } from "@mui/icons-material";
// import { Button } from "@mui/material";

// export default function GoogleAuthButton() {
//   const { loginWithGoogle } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <GoogleLogin
//         onSuccess={async (credentialResponse) => {
//           await loginWithGoogle(credentialResponse.credential);
//           navigate("/dashboard");
//         }}
//         onError={() => console.log("Login Failed")}
//         render={({ onClick }) => (
//           <Button
//             fullWidth
//             variant="outlined"
//             startIcon={<GoogleIcon />}
//             onClick={onClick}
//             sx={{ mb: 2 }}
//           >
//             Continue with Google
//           </Button>
//         )}
//       />
//     </GoogleOAuthProvider>
//   );
// }
