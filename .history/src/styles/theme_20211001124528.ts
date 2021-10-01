export const theme: StyleClosetTheme = {
  colors: {
    white800: "#f8f8f8",
    white900: "#fff",
    black700: "#111",
    black800: "#06092b",
    black900: "#000",
    red700: "#CC0F3E",
  },
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Effect: '"Grechen Fuemen", cursive',
      RobotoMono: '"Roboto Mono", monospace',
    },
  },
};

interface StyleClosetTheme {
  colors: { [key in keyof typeof fail]: string };
  font: { [key in keyof typeof fail]: string };
}
