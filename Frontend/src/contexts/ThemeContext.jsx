// // src/context/ThemeContext.js
// import React, { createContext, useMemo, useState, useContext } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const ThemeContext = createContext();

// const lightPalette = {
//   primary: {
//     main: "#4db6ac", // لون أخضر مائي حديث
//   },
//   secondary: {
//     main: "#ffb74d", // برتقالي فاتح
//   },
//   background: {
//     default: "#ffffff",
//     paper: "#f9f9f9",
//   },
//   text: {
//     primary: "#333",
//   },
// };

// const darkPalette = {
//   primary: {
//     main: "#4db6ac",
//   },
//   secondary: {
//     main: "#ffb74d",
//   },
//   background: {
//     default: "#121212",
//     paper: "#1d1d1d",
//   },
//   text: {
//     primary: "#fff",
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
//           borderRadius: 12,
//         },
//         typography: {
//           fontFamily: "Roboto, sans-serif",
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ThemeContext.Provider value={{ toggleColorMode, mode }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeMode = () => useContext(ThemeContext);
// src/context/ThemeContext.js
import React, { createContext, useMemo, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

const lightPalette = {
  primary: {
    main: "#2563eb", // Modern blue - professional and trustworthy
    light: "#3b82f6",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#64748b", // Sophisticated slate gray
    light: "#94a3b8",
    dark: "#475569",
    contrastText: "#ffffff",
  },
  success: {
    main: "#059669", // Elegant emerald green
    light: "#10b981",
    dark: "#047857",
  },
  warning: {
    main: "#d97706", // Warm amber
    light: "#f59e0b",
    dark: "#b45309",
  },
  error: {
    main: "#dc2626", // Clean red
    light: "#ef4444",
    dark: "#b91c1c",
  },
  info: {
    main: "#0284c7", // Sky blue
    light: "#0ea5e9",
    dark: "#0369a1",
  },
  background: {
    default: "#fafafa", // Soft off-white
    paper: "#ffffff",
    neutral: "#f8fafc", // Very light gray for sections
  },
  text: {
    primary: "#1e293b", // Dark slate for excellent readability
    secondary: "#64748b", // Medium slate for secondary text
    disabled: "#94a3b8",
  },
  divider: "#e2e8f0", // Light border color
  action: {
    hover: "rgba(37, 99, 235, 0.04)", // Subtle hover effect
    selected: "rgba(37, 99, 235, 0.08)",
    disabled: "rgba(37, 99, 235, 0.26)",
    disabledBackground: "rgba(37, 99, 235, 0.12)",
  },
  grey: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
};

const darkPalette = {
  primary: {
    main: "#3b82f6",
    light: "#60a5fa",
    dark: "#2563eb",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#94a3b8",
    light: "#cbd5e1",
    dark: "#64748b",
    contrastText: "#000000",
  },
  success: {
    main: "#10b981",
    light: "#34d399",
    dark: "#059669",
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
  },
  info: {
    main: "#0ea5e9",
    light: "#38bdf8",
    dark: "#0284c7",
  },
  background: {
    default: "#0f172a", // Deep slate
    paper: "#1e293b", // Slightly lighter slate
    neutral: "#334155", // Medium slate for sections
  },
  text: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
    disabled: "#64748b",
  },
  divider: "#334155",
  action: {
    hover: "rgba(59, 130, 246, 0.08)",
    selected: "rgba(59, 130, 246, 0.16)",
    disabled: "rgba(59, 130, 246, 0.26)",
    disabledBackground: "rgba(59, 130, 246, 0.12)",
  },
  grey: {
    50: "#0f172a",
    100: "#1e293b",
    200: "#334155",
    300: "#475569",
    400: "#64748b",
    500: "#94a3b8",
    600: "#cbd5e1",
    700: "#e2e8f0",
    800: "#f1f5f9",
    900: "#f8fafc",
  },
};

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? lightPalette : darkPalette),
        },
        shape: {
          borderRadius: 8, // Slightly more conservative for professional look
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          },
          h2: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          },
          h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.4,
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.4,
          },
          h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.4,
          },
          h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.4,
          },
          body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
          },
          body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
          },
          button: {
            textTransform: "none", // Keep natural casing
            fontWeight: 500,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: "10px 20px",
                fontWeight: 500,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "0 2px 8px rgba(37, 99, 235, 0.15)",
                },
              },
              contained: {
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)"
                    : "0 4px 6px rgba(0, 0, 0, 0.3)",
                border:
                  mode === "light" ? "1px solid #e2e8f0" : "1px solid #334155",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
              elevation1: {
                boxShadow:
                  mode === "light"
                    ? "0 1px 2px rgba(0, 0, 0, 0.05)"
                    : "0 2px 4px rgba(0, 0, 0, 0.3)",
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: 8,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: mode === "light" ? "#3b82f6" : "#60a5fa",
                  },
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px rgba(0, 0, 0, 0.08)"
                    : "0 2px 4px rgba(0, 0, 0, 0.3)",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 6,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 500,
                minHeight: 48,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
