import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "./shared/contexts";
import { SideMenu } from "./shared/components";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SideMenu />
          <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
