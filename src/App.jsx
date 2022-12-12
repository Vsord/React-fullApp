import CircularProgress from "@mui/material/CircularProgress";
import { React, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactSwitch from "react-switch";
import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import SignUp from "./components/SignUp/SignUp";
import TableContent from "./components/TableContent/TableContent";
import { ThemeContext } from "./context/themeContext";
import { fetchThunk } from "./store/thunks/thunks";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((current) => !current);
  };

  const loader = useSelector((state) => state.fetchReducer.isLoading);
  const error = useSelector((state) => state.fetchReducer.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  if (loader) {
    return (
      <div>
        <CircularProgress
          color="success"
          size={80}
          sx={{ position: "absolute", left: "50%", top: "40%" }}
        />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <BrowserRouter>
      <div className={styles.app} id={theme ? styles.light : styles.dark}>
        <div className={styles.reactThemeSwitcher}>
          <ReactSwitch checked={!theme} onChange={toggleTheme} />
          <p className={styles.themeTitle}>{theme ? "Light mode" : "Dark mode"}</p>
        </div>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<TableContent />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
