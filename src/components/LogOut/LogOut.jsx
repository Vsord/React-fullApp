import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../store/thunks/thunks";
import { useNavigate } from "react-router-dom";
import { clearFormState } from "../../store/actions/formAction";
import styles from "./LogOut.module.scss";

const LogOut = () => {
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
    <div className={styles.logOutButton}>
      <button onClick={() => dispatch(logOutThunk())}>Log Out</button>
    </div>
  );
};

export default LogOut;
