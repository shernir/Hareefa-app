import {Theme} from './type';

const theme: Theme = {
  colors: {
    primary: '#27AE60', // Accent green color
    secondary: '#5F6674', // Secondary color
    secondaryText: '#A8A8A8', // Secondary text color
    accent: '#A8DB6B', // Accent color (e.g., for highlights or warnings)
    text: '#E4E5E5', // Primary text color
    background: '#292D32', // Main background color
    widgetBackground: '#0D0D0D', // Background color for widgets
    white: '#FFFFFF', // White color (for text or icons)
    btnText: '#292D32', // Button text color
    inputTextColor: '#99A2A8',
  },
  dark: false, // Set to true for dark mode
  fontSize: {
    heading: 32,
    subheading: 20,
    body: 16,
    caption: 14,
    smallText: 12,
  },
  animation: {
    scale: 1.0, // Scale for animations, 1.0 means normal speed
  },
  spacing: {
    xs: 4, // Extra-small spacing, in pixels or dp
    s: 8, // Small spacing, in pixels or dp
    m: 16, // Medium spacing
    l: 24, // Large spacing
    xl: 32, // Extra-large spacing
  },
  borderRadius: {
    s: 4, // Small border radius
    m: 8, // Medium border radius
    l: 16, // Large border radius
    xl: 24, // Extra-large border radius
  },
  breakpoints: {
    phone: 360, // Phone screen width in dp
    tablet: 768, // Tablet screen width in dp
  },
  shadows: {
    s: '0px 1px 2px rgba(0, 0, 0, 0.05)', // Small shadow
    m: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Medium shadow
    l: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Large shadow
    xl: '0px 15px 30px rgba(0, 0, 0, 0.3)', // Extra-large shadow
  },
};

export default theme;
