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
