import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
// contexts
import SettingsProvider from "./contexts/SettingsContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </ReduxProvider>
  </HelmetProvider>
);