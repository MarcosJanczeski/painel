import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export default function App() {
  return (
    <AppThemeProvider>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
    </AppThemeProvider>
  );
}
