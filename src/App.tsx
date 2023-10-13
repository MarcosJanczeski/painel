import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </ThemeProvider>
  );
}
