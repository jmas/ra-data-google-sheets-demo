import { defaultTheme, RaThemeOptions } from "react-admin";

/**
 * Soft: A gentle theme for apps with rich content (images, charts, maps, etc).
 *
 * Uses white app bar, rounder corners, light colors.
 */

export const softDarkTheme: RaThemeOptions = {
  palette: {
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#FBBA72",
    },
    mode: "dark", // Switching the dark mode on is a single property value change.
  },
  sidebar: {
    width: 200,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #000",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #90caf9",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          border: "1px solid rgba(81, 81, 81, 1)",
          backgroundClip: "padding-box",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {},
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#ffffffb3",
          backgroundColor: "#616161",
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          paddingTop: "12px",
          paddingBottom: "12px",
          "&:last-child td": { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      },
    },
    RaSimpleForm: {
      styleOverrides: {
        root: {
          paddingBottom: "0 !important",
        },
      },
    },
    RaCreateButton: {
      styleOverrides: {
        floating: {
          bottom: "20px",
        },
      },
    },
  },
};

export const softLightTheme: RaThemeOptions = {
  palette: {
    primary: {
      main: "#4f3cc9",
    },
    secondary: {
      light: "#5f5fc4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#fff",
    },
    background: {
      default: "#fcfcfe",
    },
    mode: "light",
  },
  sidebar: {
    width: 200,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #fff",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #4f3cc9",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          border: "1px solid #e0e0e3",
          backgroundClip: "padding-box",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#808080",
          backgroundColor: "#fff",
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#f5f5f5",
        },
        barColorPrimary: {
          backgroundColor: "#d7d7d7",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          paddingTop: "12px",
          paddingBottom: "12px",
          "&:last-child td": { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },
    RaSimpleForm: {
      styleOverrides: {
        root: {
          paddingBottom: "0 !important",
        },
      },
    },
    RaCreateButton: {
      styleOverrides: {
        floating: {
          bottom: "20px",
        },
      },
    },
  },
};
