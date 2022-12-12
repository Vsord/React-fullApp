import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { ThemeContext } from "./context/themeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import "./index.css";

const Main = () => {
  const [theme, setTheme] = useLocalStorage("theme", true);
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
