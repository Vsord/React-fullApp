import { React, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { clearFormState } from "../../store/actions/formAction";
import { logOutThunk } from "../../store/thunks/thunks";
import styles from "./LogOut.module.scss";

const LogOut = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const isLoaded = useSelector((state) => state.formReducer.isLoaded);

  useEffect(() => {
    if (isLoaded) {
      dispatch(clearFormState());
      navigate("/login");
    }
  }, [dispatch, isLoaded, navigate]);

  return (
    <div className={styles.logOutButton} id={theme ? styles.light : styles.dark}>
      <button onClick={() => dispatch(logOutThunk())}>Log Out</button>
    </div>
  );
};

export default LogOut;
