const theme = {
  colors: {
    layoutBg: "blue",
    // Fill in other colors with your desired values
    primary: "",
    secondary: "",
    success: "",
    warning: "",
    danger: "",
    light: "",
    dark: "",
  },
  fonts: {
    title: "Roboto",
    text: "Consolas",
  },
  fontSizes: {
    base: undefined, // You can set a base font size here
  },
  lineHeights: {
    // Define line heights if needed
  },
  screenSizes: {
    sm: { max: "575px" },
    md: { max: "767px" },
    lg: { max: "991px" },
    xl: { max: "1199px" },
  },
  spacing: {
    unit: 8,
    sm: "16px", // 2 * var(--spacing-unit)
    md: "24px", // 3 * var(--spacing-unit)
    lg: "32px", // 4 * var(--spacing-unit)
  },
  borders: {
    radius: "4px",
    width: "1px",
    color: "var(--light-color)", // Assuming light color is defined
  },
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 5px 8px rgba(0, 0, 0, 0.15)",
    lg: "0 10px 16px rgba(0, 0, 0, 0.2)",
  },
  textSizes: {
    big: {
      max: "2rem",
      mid: "1.5rem",
      min: "1.25rem",
    },
    medium: {
      max: "1.25rem",
      mid: "1rem",
      min: "0.875rem",
    },
    small: {
      max: "1rem",
      mid: "0.75rem",
      min: "0.625rem",
    },
  },
};

// You can add other properties to the theme object as needed

export default theme;
