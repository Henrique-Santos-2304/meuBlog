export default {
  grid: {
    container: "100vw",
    containerContent: "78rem",
  },
  media: {
    small: "376px",
    xsmall: "480px",
    medium: "620px",
    xmedium: "768px",
    large: "980px",
    full: "1128px",
  },
  colors: {
    bgPrimary: "#75dcc6",
    bgSecondary: "#486afe",
    effectsPrimary: "#b7f600",
    attention: "#D3D542",

    primary: "#f8f8f8",
    secondary: "#1e1e1e",
  },
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Tangerine: "'Tangerine', cursive",
      GrechenFuemen: '"Grechen Fuemen", cursive',
      Roboto: '"Roboto", monospace',
    },
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      xbiglarge: "3rem",
      xxbiglarge: "3.8rem",
    },
    light: 300,
    normal: 500,
    bold: 700,
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
} as const;
