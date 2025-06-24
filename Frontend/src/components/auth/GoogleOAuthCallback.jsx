// // // components/auth/GoogleOAuthCallback.jsx
// // import React, { useEffect } from 'react';
// // import { useSearchParams, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../contexts/AuthContext/AuthContext';

// // const GoogleOAuthCallback = () => {
// //   const [searchParams] = useSearchParams();
// //   const navigate = useNavigate();
// //   const { setToken, DEFAULT_REDIRECTS } = useAuth();

// //   useEffect(() => {
// //     const handleCallback = async () => {
// //       // Get parameters from URL
// //       const token = searchParams.get('token');
// //       const error = searchParams.get('error');
// //       const userId = searchParams.get('id');
// //       const name = searchParams.get('name');
// //       const email = searchParams.get('email');
// //       const avatar = searchParams.get('avatar');
// //       const role = searchParams.get('role');

// //       if (error) {
// //         console.error('OAuth error:', error);
// //         navigate('/login?error=' + error);
// //         return;
// //       }

// //       if (token && userId) {
// //         try {
// //           // Store the token
// //           localStorage.setItem('access-token', token);

// //           // Create user object
// //           const user = {
// //             id: userId,
// //             name: decodeURIComponent(name || ''),
// //             email: decodeURIComponent(email || ''),
// //             avatar: decodeURIComponent(avatar || ''),
// //             role: role || 'student'
// //           };

// //           // Update auth context
// //           setToken(token, user);

// //           // Redirect based on role
// //           const redirectPath = DEFAULT_REDIRECTS[role] || DEFAULT_REDIRECTS.student;
// //           navigate(redirectPath, { replace: true });

// //         } catch (error) {
// //           console.error('Error processing OAuth callback:', error);
// //           navigate('/login?error=callback_error');
// //         }
// //       } else {
// //         console.error('Missing token or user ID in callback');
// //         navigate('/login?error=missing_data');
// //       }
// //     };

// //     handleCallback();
// //   }, [searchParams, navigate, setToken, DEFAULT_REDIRECTS]);

// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <div className="text-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
// //         <p className="mt-4 text-gray-600">Processing login...</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GoogleOAuthCallback;// components/auth/GoogleOAuthCallback.jsx
// import React, { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
// import {
//   Box,
//   CircularProgress,
//   Typography,
//   Alert,
//   Container,
//   Paper,
//   Fade,
// } from "@mui/material";
// import { Google } from "@mui/icons-material";

// const GoogleOAuthCallback = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { setToken, DEFAULT_REDIRECTS } = useAuth();
//   const [error, setError] = React.useState(null);
//   const [isProcessing, setIsProcessing] = React.useState(true);

//   useEffect(() => {
//     const handleCallback = async () => {
//       try {
//         // Get parameters from URL
//         const token = searchParams.get("token");
//         const errorParam = searchParams.get("error");
//         const userId = searchParams.get("id");
//         const name = searchParams.get("name");
//         const email = searchParams.get("email");
//         const avatar = searchParams.get("avatar");
//         const role = searchParams.get("role");

//         if (errorParam) {
//           setError(getErrorMessage(errorParam));
//           setTimeout(() => {
//             navigate("/login?error=" + errorParam);
//           }, 3000);
//           return;
//         }

//         if (token && userId) {
//           // Store the token
//           localStorage.setItem("access-token", token);

//           // Create user object
//           const user = {
//             id: userId,
//             name: decodeURIComponent(name || ""),
//             email: decodeURIComponent(email || ""),
//             avatar: decodeURIComponent(avatar || ""),
//             role: role || "student",
//           };

//           // Update auth context
//           setToken(token, user);

//           // Small delay to show success message
//           setTimeout(() => {
//             // Redirect based on role
//             const redirectPath =
//               DEFAULT_REDIRECTS[role] || DEFAULT_REDIRECTS.student;
//             navigate(redirectPath, { replace: true });
//           }, 1500);
//         } else {
//           setError("Missing authentication data");
//           setTimeout(() => {
//             navigate("/login?error=missing_data");
//           }, 3000);
//         }
//       } catch (error) {
//         console.error("Error processing OAuth callback:", error);
//         setError("Failed to process authentication");
//         setTimeout(() => {
//           navigate("/login?error=callback_error");
//         }, 3000);
//       } finally {
//         setIsProcessing(false);
//       }
//     };

//     handleCallback();
//   }, [searchParams, navigate, setToken, DEFAULT_REDIRECTS]);

//   const getErrorMessage = (errorType) => {
//     switch (errorType) {
//       case "oauth_error":
//         return "Google authentication failed";
//       case "oauth_failed":
//         return "Google login failed";
//       case "login_failed":
//         return "Login process failed";
//       case "callback_error":
//         return "Authentication callback failed";
//       case "missing_data":
//         return "Missing authentication data";
//       default:
//         return "Authentication error occurred";
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: `linear-gradient(135deg,
//           #f3e5f5 0%,
//           #e1bee7 50%,
//           #ce93d8 100%)`,
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={8}
//           sx={{
//             p: 6,
//             textAlign: "center",
//             borderRadius: 4,
//             background: "rgba(255, 255, 255, 0.95)",
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           {error ? (
//             <Fade in>
//               <Box>
//                 <Alert
//                   severity="error"
//                   sx={{
//                     mb: 3,
//                     borderRadius: 2,
//                     "& .MuiAlert-icon": {
//                       fontSize: "2rem",
//                     },
//                   }}
//                 >
//                   <Typography variant="h6" component="div" sx={{ mb: 1 }}>
//                     Authentication Failed
//                   </Typography>
//                   {error}
//                 </Alert>
//                 <Typography variant="body2" color="text.secondary">
//                   Redirecting to login page...
//                 </Typography>
//               </Box>
//             </Fade>
//           ) : (
//             <Fade in>
//               <Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     mb: 3,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       display: "inline-flex",
//                     }}
//                   >
//                     <CircularProgress
//                       size={60}
//                       thickness={4}
//                       sx={{
//                         color: "#7b1fa2",
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     >
//                       <Google sx={{ fontSize: 28, color: "#7b1fa2" }} />
//                     </Box>
//                   </Box>
//                 </Box>

//                 <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
//                   {isProcessing
//                     ? "Processing Authentication..."
//                     : "Login Successful!"}
//                 </Typography>

//                 <Typography variant="body1" color="text.secondary">
//                   {isProcessing
//                     ? "Please wait while we set up your account"
//                     : "Redirecting to your dashboard..."}
//                 </Typography>
//               </Box>
//             </Fade>
//           )}
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default GoogleOAuthCallback;
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import {
  Box,
  CircularProgress,
  Typography,
  Alert,
  Container,
  Paper,
  Fade,
} from "@mui/material";
import { Google } from "@mui/icons-material";

const GoogleOAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setToken, DEFAULT_REDIRECTS } = useAuth();
  const [error, setError] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(true);
  useEffect(() => {
    const token = searchParams.get("token");
    const errorParam = searchParams.get("error");
    const userId = searchParams.get("id");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const avatar = searchParams.get("avatar");
    const role = searchParams.get("role");

    const handleCallback = async () => {
      try {
        if (errorParam) {
          setError(getErrorMessage(errorParam));
          setTimeout(() => {
            navigate("/login?error=" + errorParam);
          }, 3000);
          return;
        }

        if (token && userId) {
          localStorage.setItem("access-token", token);

          const user = {
            id: userId,
            name: decodeURIComponent(name || ""),
            email: decodeURIComponent(email || ""),
            avatar: decodeURIComponent(avatar || ""),
            role: role || "student",
          };

          setToken(token, user);

          setTimeout(() => {
            const redirectPath =
              DEFAULT_REDIRECTS[role] || DEFAULT_REDIRECTS.student;
            navigate(redirectPath, { replace: true });
          }, 1500);
        } else {
          setError("Missing authentication data");
          setTimeout(() => {
            navigate("/login?error=missing_data");
          }, 3000);
        }
      } catch (error) {
        console.error("Error processing OAuth callback:", error);
        setError("Failed to process authentication");
        setTimeout(() => {
          navigate("/login?error=callback_error");
        }, 3000);
      } finally {
        setIsProcessing(false);
      }
    };

    handleCallback();
  }, []); // 👈 فقط مرة واحدة

  const getErrorMessage = (errorType) => {
    switch (errorType) {
      case "oauth_error":
        return "Google authentication failed";
      case "oauth_failed":
        return "Google login failed";
      case "login_failed":
        return "Login process failed";
      case "callback_error":
        return "Authentication callback failed";
      case "missing_data":
        return "Missing authentication data";
      default:
        return "Authentication error occurred";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, 
          #f3e5f5 0%, 
          #e1bee7 50%,
          #ce93d8 100%)`,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          {error ? (
            <Fade in>
              <Box>
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                    "& .MuiAlert-icon": {
                      fontSize: "2rem",
                    },
                  }}
                >
                  <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    Authentication Failed
                  </Typography>
                  {error}
                </Alert>
                <Typography variant="body2" color="text.secondary">
                  Redirecting to login page...
                </Typography>
              </Box>
            </Fade>
          ) : (
            <Fade in>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-flex",
                    }}
                  >
                    <CircularProgress
                      size={60}
                      thickness={4}
                      sx={{
                        color: "#7b1fa2",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Google sx={{ fontSize: 28, color: "#7b1fa2" }} />
                    </Box>
                  </Box>
                </Box>

                <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
                  {isProcessing
                    ? "Processing Authentication..."
                    : "Login Successful!"}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  {isProcessing
                    ? "Please wait while we set up your account"
                    : "Redirecting to your dashboard..."}
                </Typography>
              </Box>
            </Fade>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default GoogleOAuthCallback;
