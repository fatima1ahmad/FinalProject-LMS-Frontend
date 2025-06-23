// // // src/context/ThemeContext.js
// // import React, { createContext, useMemo, useState, useContext } from "react";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";

// // const ThemeContext = createContext();

// // const lightPalette = {
// //   primary: {
// //     main: "#4db6ac", // لون أخضر مائي حديث
// //   },
// //   secondary: {
// //     main: "#ffb74d", // برتقالي فاتح
// //   },
// //   background: {
// //     default: "#ffffff",
// //     paper: "#f9f9f9",
// //   },
// //   text: {
// //     primary: "#333",
// //   },
// // };

// // const darkPalette = {
// //   primary: {
// //     main: "#4db6ac",
// //   },
// //   secondary: {
// //     main: "#ffb74d",
// //   },
// //   background: {
// //     default: "#121212",
// //     paper: "#1d1d1d",
// //   },
// //   text: {
// //     primary: "#fff",
// //   },
// // };

// // export const ThemeContextProvider = ({ children }) => {
// //   const [mode, setMode] = useState("light");

// //   const toggleColorMode = () => {
// //     setMode((prev) => (prev === "light" ? "dark" : "light"));
// //   };

// //   const theme = useMemo(
// //     () =>
// //       createTheme({
// //         palette: mode === "light" ? lightPalette : darkPalette,
// //         shape: {
// //           borderRadius: 12,
// //         },
// //         typography: {
// //           fontFamily: "Roboto, sans-serif",
// //         },
// //       }),
// //     [mode]
// //   );

// //   return (
// //     <ThemeContext.Provider value={{ toggleColorMode, mode }}>
// //       <ThemeProvider theme={theme}>{children}</ThemeProvider>
// //     </ThemeContext.Provider>
// //   );
// // };

// // export const useThemeMode = () => useContext(ThemeContext);
// // // src / context / ThemeContext.js;
// // // // import React, { createContext, useMemo, useState, useContext } from "react";
// // // // import { createTheme, ThemeProvider } from "@mui/material/styles";

// // // // const ThemeContext = createContext();

// // // // const lightPalette = {
// // // //   primary: {
// // // //     main: "#2563eb", // Modern blue - professional and trustworthy
// // // //     light: "#3b82f6",
// // // //     dark: "#1d4ed8",
// // // //     contrastText: "#ffffff",
// // // //   },
// // // //   secondary: {
// // // //     main: "#64748b", // Sophisticated slate gray
// // // //     light: "#94a3b8",
// // // //     dark: "#475569",
// // // //     contrastText: "#ffffff",
// // // //   },
// // // //   success: {
// // // //     main: "#059669", // Elegant emerald green
// // // //     light: "#10b981",
// // // //     dark: "#047857",
// // // //   },
// // // //   warning: {
// // // //     main: "#d97706", // Warm amber
// // // //     light: "#f59e0b",
// // // //     dark: "#b45309",
// // // //   },
// // // //   error: {
// // // //     main: "#dc2626", // Clean red
// // // //     light: "#ef4444",
// // // //     dark: "#b91c1c",
// // // //   },
// // // //   info: {
// // // //     main: "#0284c7", // Sky blue
// // // //     light: "#0ea5e9",
// // // //     dark: "#0369a1",
// // // //   },
// // // //   background: {
// // // //     default: "#fafafa", // Soft off-white
// // // //     paper: "#ffffff",
// // // //     neutral: "#f8fafc", // Very light gray for sections
// // // //   },
// // // //   text: {
// // // //     primary: "#1e293b", // Dark slate for excellent readability
// // // //     secondary: "#64748b", // Medium slate for secondary text
// // // //     disabled: "#94a3b8",
// // // //   },
// // // //   divider: "#e2e8f0", // Light border color
// // // //   action: {
// // // //     hover: "rgba(37, 99, 235, 0.04)", // Subtle hover effect
// // // //     selected: "rgba(37, 99, 235, 0.08)",
// // // //     disabled: "rgba(37, 99, 235, 0.26)",
// // // //     disabledBackground: "rgba(37, 99, 235, 0.12)",
// // // //   },
// // // //   grey: {
// // // //     50: "#f8fafc",
// // // //     100: "#f1f5f9",
// // // //     200: "#e2e8f0",
// // // //     300: "#cbd5e1",
// // // //     400: "#94a3b8",
// // // //     500: "#64748b",
// // // //     600: "#475569",
// // // //     700: "#334155",
// // // //     800: "#1e293b",
// // // //     900: "#0f172a",
// // // //   },
// // // // };

// // // // const darkPalette = {
// // // //   primary: {
// // // //     main: "#3b82f6",
// // // //     light: "#60a5fa",
// // // //     dark: "#2563eb",
// // // //     contrastText: "#ffffff",
// // // //   },
// // // //   secondary: {
// // // //     main: "#94a3b8",
// // // //     light: "#cbd5e1",
// // // //     dark: "#64748b",
// // // //     contrastText: "#000000",
// // // //   },
// // // //   success: {
// // // //     main: "#10b981",
// // // //     light: "#34d399",
// // // //     dark: "#059669",
// // // //   },
// // // //   warning: {
// // // //     main: "#f59e0b",
// // // //     light: "#fbbf24",
// // // //     dark: "#d97706",
// // // //   },
// // // //   error: {
// // // //     main: "#ef4444",
// // // //     light: "#f87171",
// // // //     dark: "#dc2626",
// // // //   },
// // // //   info: {
// // // //     main: "#0ea5e9",
// // // //     light: "#38bdf8",
// // // //     dark: "#0284c7",
// // // //   },
// // // //   background: {
// // // //     default: "#0f172a", // Deep slate
// // // //     paper: "#1e293b", // Slightly lighter slate
// // // //     neutral: "#334155", // Medium slate for sections
// // // //   },
// // // //   text: {
// // // //     primary: "#f8fafc",
// // // //     secondary: "#cbd5e1",
// // // //     disabled: "#64748b",
// // // //   },
// // // //   divider: "#334155",
// // // //   action: {
// // // //     hover: "rgba(59, 130, 246, 0.08)",
// // // //     selected: "rgba(59, 130, 246, 0.16)",
// // // //     disabled: "rgba(59, 130, 246, 0.26)",
// // // //     disabledBackground: "rgba(59, 130, 246, 0.12)",
// // // //   },
// // // //   grey: {
// // // //     50: "#0f172a",
// // // //     100: "#1e293b",
// // // //     200: "#334155",
// // // //     300: "#475569",
// // // //     400: "#64748b",
// // // //     500: "#94a3b8",
// // // //     600: "#cbd5e1",
// // // //     700: "#e2e8f0",
// // // //     800: "#f1f5f9",
// // // //     900: "#f8fafc",
// // // //   },
// // // // };

// // // // export const ThemeContextProvider = ({ children }) => {
// // // //   const [mode, setMode] = useState("light");

// // // //   const toggleColorMode = () => {
// // // //     setMode((prev) => (prev === "light" ? "dark" : "light"));
// // // //   };

// // // //   const theme = useMemo(
// // // //     () =>
// // // //       createTheme({
// // // //         palette: {
// // // //           mode,
// // // //           ...(mode === "light" ? lightPalette : darkPalette),
// // // //         },
// // // //         shape: {
// // // //           borderRadius: 8, // Slightly more conservative for professional look
// // // //         },
// // // //         typography: {
// // // //           fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
// // // //           h1: {
// // // //             fontWeight: 700,
// // // //             fontSize: "2.5rem",
// // // //             lineHeight: 1.2,
// // // //             letterSpacing: "-0.02em",
// // // //           },
// // // //           h2: {
// // // //             fontWeight: 600,
// // // //             fontSize: "2rem",
// // // //             lineHeight: 1.3,
// // // //             letterSpacing: "-0.01em",
// // // //           },
// // // //           h3: {
// // // //             fontWeight: 600,
// // // //             fontSize: "1.5rem",
// // // //             lineHeight: 1.4,
// // // //           },
// // // //           h4: {
// // // //             fontWeight: 600,
// // // //             fontSize: "1.25rem",
// // // //             lineHeight: 1.4,
// // // //           },
// // // //           h5: {
// // // //             fontWeight: 600,
// // // //             fontSize: "1.125rem",
// // // //             lineHeight: 1.4,
// // // //           },
// // // //           h6: {
// // // //             fontWeight: 600,
// // // //             fontSize: "1rem",
// // // //             lineHeight: 1.4,
// // // //           },
// // // //           body1: {
// // // //             fontSize: "1rem",
// // // //             lineHeight: 1.6,
// // // //           },
// // // //           body2: {
// // // //             fontSize: "0.875rem",
// // // //             lineHeight: 1.5,
// // // //           },
// // // //           button: {
// // // //             textTransform: "none", // Keep natural casing
// // // //             fontWeight: 500,
// // // //           },
// // // //         },
// // // //         components: {
// // // //           MuiButton: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 borderRadius: 8,
// // // //                 padding: "10px 20px",
// // // //                 fontWeight: 500,
// // // //                 boxShadow: "none",
// // // //                 "&:hover": {
// // // //                   boxShadow: "0 2px 8px rgba(37, 99, 235, 0.15)",
// // // //                 },
// // // //               },
// // // //               contained: {
// // // //                 "&:hover": {
// // // //                   boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
// // // //                 },
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiCard: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 borderRadius: 12,
// // // //                 boxShadow:
// // // //                   mode === "light"
// // // //                     ? "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)"
// // // //                     : "0 4px 6px rgba(0, 0, 0, 0.3)",
// // // //                 border:
// // // //                   mode === "light" ? "1px solid #e2e8f0" : "1px solid #334155",
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiPaper: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 borderRadius: 8,
// // // //               },
// // // //               elevation1: {
// // // //                 boxShadow:
// // // //                   mode === "light"
// // // //                     ? "0 1px 2px rgba(0, 0, 0, 0.05)"
// // // //                     : "0 2px 4px rgba(0, 0, 0, 0.3)",
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiTextField: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 "& .MuiOutlinedInput-root": {
// // // //                   borderRadius: 8,
// // // //                   "&:hover .MuiOutlinedInput-notchedOutline": {
// // // //                     borderColor: mode === "light" ? "#3b82f6" : "#60a5fa",
// // // //                   },
// // // //                 },
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiAppBar: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 boxShadow:
// // // //                   mode === "light"
// // // //                     ? "0 1px 3px rgba(0, 0, 0, 0.08)"
// // // //                     : "0 2px 4px rgba(0, 0, 0, 0.3)",
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiChip: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 borderRadius: 6,
// // // //               },
// // // //             },
// // // //           },
// // // //           MuiTab: {
// // // //             styleOverrides: {
// // // //               root: {
// // // //                 textTransform: "none",
// // // //                 fontWeight: 500,
// // // //                 minHeight: 48,
// // // //               },
// // // //             },
// // // //           },
// // // //         },
// // // //       }),
// // // //     [mode]
// // // //   );

// // // //   return (
// // // //     <ThemeContext.Provider value={{ toggleColorMode, mode, theme }}>
// // // //       <ThemeProvider theme={theme}>{children}</ThemeProvider>
// // // //     </ThemeContext.Provider>
// // // //   );
// // // // };

// // // // export const useThemeMode = () => useContext(ThemeContext);
// // src/context/ThemeContext.js
// import React, { createContext, useMemo, useState, useContext } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const ThemeContext = createContext();

// const lightPalette = {
//   primary: {
//     main: "#2196F3", // Modern blue - guides attention
//     light: "#64B5F6",
//     dark: "#1976D2",
//     contrastText: "#ffffff",
//   },
//   secondary: {
//     main: "#4CAF50", // Fresh green - for success states and accents
//     light: "#81C784",
//     dark: "#388E3C",
//     contrastText: "#ffffff",
//   },
//   // Neutral tones for structure and balance
//   grey: {
//     50: "#FAFAFA",
//     100: "#F5F5F5",
//     200: "#EEEEEE",
//     300: "#E0E0E0",
//     400: "#BDBDBD",
//     500: "#9E9E9E",
//     600: "#757575",
//     700: "#616161",
//     800: "#424242",
//     900: "#212121",
//   },
//   background: {
//     default: "#ffffff", // Clean white background
//     paper: "#ffffff",
//     neutral: "#F8F9FA", // Subtle neutral for cards/sections
//   },
//   text: {
//     primary: "#212121", // Dark neutral for main text
//     secondary: "#616161", // Medium neutral for secondary text
//     disabled: "#BDBDBD",
//   },
//   divider: "#E0E0E0", // Light neutral for borders
//   // Educational website specific colors
//   info: {
//     main: "#2196F3", // Blue for information
//     light: "#E3F2FD",
//   },
//   success: {
//     main: "#4CAF50", // Green for success/completion
//     light: "#E8F5E8",
//   },
//   warning: {
//     main: "#FF9800", // Orange for warnings (balanced with scheme)
//     light: "#FFF3E0",
//   },
//   error: {
//     main: "#F44336", // Red for errors
//     light: "#FFEBEE",
//   },
// };

// const darkPalette = {
//   primary: {
//     main: "#42A5F5", // Lighter blue for dark mode
//     light: "#90CAF9",
//     dark: "#1976D2",
//     contrastText: "#ffffff",
//   },
//   secondary: {
//     main: "#66BB6A", // Lighter green for dark mode
//     light: "#A5D6A7",
//     dark: "#388E3C",
//     contrastText: "#ffffff",
//   },
//   grey: {
//     50: "#303030",
//     100: "#424242",
//     200: "#616161",
//     300: "#757575",
//     400: "#9E9E9E",
//     500: "#BDBDBD",
//     600: "#E0E0E0",
//     700: "#EEEEEE",
//     800: "#F5F5F5",
//     900: "#FAFAFA",
//   },
//   background: {
//     default: "#121212", // Dark background
//     paper: "#1E1E1E",
//     neutral: "#2A2A2A",
//   },
//   text: {
//     primary: "#FFFFFF",
//     secondary: "#BDBDBD",
//     disabled: "#757575",
//   },
//   divider: "#424242",
//   info: {
//     main: "#42A5F5",
//     light: "#1A237E",
//   },
//   success: {
//     main: "#66BB6A",
//     light: "#1B5E20",
//   },
//   warning: {
//     main: "#FFB74D",
//     light: "#E65100",
//   },
//   error: {
//     main: "#EF5350",
//     light: "#B71C1C",
//   },
// };

// export const ThemeContextProvider = ({ children }) => {
//   const [mode, setMode] = useState("light");

//   const toggleColorMode = () => {
//     setMode((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: mode === "light" ? lightPalette : darkPalette,
//         shape: {
//           borderRadius: 8, // Slightly reduced for modern look
//         },
//         typography: {
//           fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//           h1: {
//             fontWeight: 600,
//             color: mode === "light" ? "#212121" : "#FFFFFF",
//           },
//           h2: {
//             fontWeight: 600,
//             color: mode === "light" ? "#212121" : "#FFFFFF",
//           },
//           h3: {
//             fontWeight: 500,
//             color: mode === "light" ? "#212121" : "#FFFFFF",
//           },
//           body1: {
//             color: mode === "light" ? "#424242" : "#E0E0E0",
//           },
//           body2: {
//             color: mode === "light" ? "#616161" : "#BDBDBD",
//           },
//         },
//         components: {
//           // Custom component styles for educational interface
//           MuiButton: {
//             styleOverrides: {
//               root: {
//                 textTransform: "none", // More modern look
//                 fontWeight: 500,
//               },
//             },
//           },
//           MuiCard: {
//             styleOverrides: {
//               root: {
//                 boxShadow:
//                   mode === "light"
//                     ? "0 2px 8px rgba(0,0,0,0.1)"
//                     : "0 2px 8px rgba(0,0,0,0.3)",
//                 border: `1px solid ${mode === "light" ? "#E0E0E0" : "#424242"}`,
//               },
//             },
//           },
//           MuiAppBar: {
//             styleOverrides: {
//               root: {
//                 backgroundColor: mode === "light" ? "#FFFFFF" : "#1E1E1E",
//                 color: mode === "light" ? "#212121" : "#FFFFFF",
//                 boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
//               },
//             },
//           },
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ThemeContext.Provider value={{ toggleColorMode, mode, theme }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeMode = () => useContext(ThemeContext);
import React, { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode palette
          primary: {
            light: "#B388FF",
            main: "#7C4DFF",
            dark: "#651FFF",
            contrastText: "#FFFFFF",
          },
          secondary: {
            light: "#CE93D8",
            main: "#9C27B0",
            dark: "#7B1FA2",
            contrastText: "#FFFFFF",
          },
          error: {
            light: "#FF8A80",
            main: "#FF5252",
            dark: "#D32F2F",
            contrastText: "#FFFFFF",
          },
          warning: {
            light: "#FFAB91",
            main: "#FF7043",
            dark: "#E64A19",
            contrastText: "#FFFFFF",
          },
          info: {
            light: "#80D8FF",
            main: "#40C4FF",
            dark: "#0091EA",
            contrastText: "#FFFFFF",
          },
          success: {
            light: "#81C784",
            main: "#4CAF50",
            dark: "#388E3C",
            contrastText: "#FFFFFF",
          },
          background: {
            default: "#FFFFFF",
            paper: "#F5F5F5",
          },
          text: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#BDBDBD",
          },
          grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
          },
        }
      : {
          // Dark mode palette
          primary: {
            light: "#B388FF",
            main: "#7C4DFF",
            dark: "#651FFF",
            contrastText: "#FFFFFF",
          },
          secondary: {
            light: "#CE93D8",
            main: "#9C27B0",
            dark: "#7B1FA2",
            contrastText: "#FFFFFF",
          },
          error: {
            light: "#FF8A80",
            main: "#FF5252",
            dark: "#D32F2F",
            contrastText: "#FFFFFF",
          },
          warning: {
            light: "#FFAB91",
            main: "#FF7043",
            dark: "#E64A19",
            contrastText: "#FFFFFF",
          },
          info: {
            light: "#80D8FF",
            main: "#40C4FF",
            dark: "#0091EA",
            contrastText: "#FFFFFF",
          },
          success: {
            light: "#81C784",
            main: "#4CAF50",
            dark: "#388E3C",
            contrastText: "#FFFFFF",
          },
          background: {
            default: "#121212",
            paper: "#1E1E1E",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#B0B0B0",
            disabled: "#616161",
          },
          grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
          },
        }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.25px",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.25px",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.6,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.6,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows:
    mode === "light"
      ? [
          "none",
          "0px 1px 2px rgba(124, 77, 255, 0.05)",
          "0px 2px 4px rgba(124, 77, 255, 0.08)",
          "0px 4px 6px rgba(124, 77, 255, 0.10)",
          "0px 6px 8px rgba(124, 77, 255, 0.12)",
          "0px 8px 10px rgba(124, 77, 255, 0.14)",
          "0px 10px 12px rgba(124, 77, 255, 0.16)",
          "0px 12px 14px rgba(124, 77, 255, 0.18)",
          "0px 14px 16px rgba(124, 77, 255, 0.20)",
          "0px 16px 18px rgba(124, 77, 255, 0.22)",
          "0px 18px 20px rgba(124, 77, 255, 0.24)",
          "0px 20px 22px rgba(124, 77, 255, 0.26)",
          "0px 22px 24px rgba(124, 77, 255, 0.28)",
          "0px 24px 26px rgba(124, 77, 255, 0.30)",
          "0px 26px 28px rgba(124, 77, 255, 0.32)",
          "0px 28px 30px rgba(124, 77, 255, 0.34)",
          "0px 30px 32px rgba(124, 77, 255, 0.36)",
          "0px 32px 34px rgba(124, 77, 255, 0.38)",
          "0px 34px 36px rgba(124, 77, 255, 0.40)",
          "0px 36px 38px rgba(124, 77, 255, 0.42)",
          "0px 38px 40px rgba(124, 77, 255, 0.44)",
          "0px 40px 42px rgba(124, 77, 255, 0.46)",
          "0px 42px 44px rgba(124, 77, 255, 0.48)",
          "0px 44px 46px rgba(124, 77, 255, 0.50)",
        ]
      : [
          "none",
          "0px 1px 2px rgba(0, 0, 0, 0.3)",
          "0px 2px 4px rgba(0, 0, 0, 0.3)",
          "0px 4px 6px rgba(0, 0, 0, 0.3)",
          "0px 6px 8px rgba(0, 0, 0, 0.3)",
          "0px 8px 10px rgba(0, 0, 0, 0.3)",
          "0px 10px 12px rgba(0, 0, 0, 0.3)",
          "0px 12px 14px rgba(0, 0, 0, 0.3)",
          "0px 14px 16px rgba(0, 0, 0, 0.3)",
          "0px 16px 18px rgba(0, 0, 0, 0.3)",
          "0px 18px 20px rgba(0, 0, 0, 0.3)",
          "0px 20px 22px rgba(0, 0, 0, 0.3)",
          "0px 22px 24px rgba(0, 0, 0, 0.3)",
          "0px 24px 26px rgba(0, 0, 0, 0.3)",
          "0px 26px 28px rgba(0, 0, 0, 0.3)",
          "0px 28px 30px rgba(0, 0, 0, 0.3)",
          "0px 30px 32px rgba(0, 0, 0, 0.3)",
          "0px 32px 34px rgba(0, 0, 0, 0.3)",
          "0px 34px 36px rgba(0, 0, 0, 0.3)",
          "0px 36px 38px rgba(0, 0, 0, 0.3)",
          "0px 38px 40px rgba(0, 0, 0, 0.3)",
          "0px 40px 42px rgba(0, 0, 0, 0.3)",
          "0px 42px 44px rgba(0, 0, 0, 0.3)",
          "0px 44px 46px rgba(0, 0, 0, 0.3)",
        ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow:
              mode === "light"
                ? "0px 4px 8px rgba(124, 77, 255, 0.2)"
                : "0px 4px 8px rgba(0, 0, 0, 0.4)",
            transform: "translateY(-1px)",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow:
              mode === "light"
                ? "0px 4px 8px rgba(124, 77, 255, 0.2)"
                : "0px 4px 8px rgba(0, 0, 0, 0.4)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
          },
        },
      },
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            background:
              mode === "light"
                ? "linear-gradient(135deg, #7C4DFF 0%, #B388FF 100%)"
                : "linear-gradient(135deg, #7C4DFF 0%, #651FFF 100%)",
            color: "#FFFFFF",
            "&:hover": {
              background:
                mode === "light"
                  ? "linear-gradient(135deg, #651FFF 0%, #7C4DFF 100%)"
                  : "linear-gradient(135deg, #651FFF 0%, #3D00E0 100%)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            mode === "light"
              ? "0px 4px 12px rgba(124, 77, 255, 0.08)"
              : "0px 4px 12px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              mode === "light"
                ? "0px 8px 24px rgba(124, 77, 255, 0.12)"
                : "0px 8px 24px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            mode === "light"
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(30, 30, 30, 0.9)",
          backdropFilter: "blur(8px)",
          boxShadow:
            mode === "light"
              ? "0px 2px 4px rgba(124, 77, 255, 0.05)"
              : "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderBottom:
            mode === "light"
              ? "1px solid rgba(124, 77, 255, 0.1)"
              : "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor:
            mode === "light"
              ? "rgba(124, 77, 255, 0.1)"
              : "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

const createAppTheme = (mode) => createTheme(getDesignTokens(mode));

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
