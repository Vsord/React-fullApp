import CircularProgress from "@mui/material/CircularProgress";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import SignUp from "./components/SignUp/SignUp";
import TableContent from "./components/TableContent/TableContent";
import { fetchThunk } from "./store/thunks/thunks";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
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
      <div className={styles.App}>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<TableContent />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
