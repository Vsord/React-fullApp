import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_block}>
      <div className={styles.sidebar_block__inner}>
        <div className={styles.sidebar_dashboard}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div className={styles.sidebar_table}>
          <NavLink to="/table">Table</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
