import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarBlockInner}>
          <ul>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/table">Table</NavLink>
            <NavLink to="/sport">Sport</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
