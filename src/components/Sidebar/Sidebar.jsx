import DashboardIcon from "@mui/icons-material/Dashboard";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { changeLocationPathName } from "../../utils/changeLocationPathName";
import LogOut from "../LogOut/LogOut";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className={styles.sidebarBlock} id={theme ? styles.light : styles.dark}>
        <div className={styles.sidebarBlockMenu}>
          <div className={styles.sidebarBlockTitle}>
            <DonutSmallOutlinedIcon className={styles.sidebarDonutIcon} />
            <h3>{changeLocationPathName(location.pathname)}</h3>
          </div>
          <ul>
            <div>
              <Button
                variant="text"
                startIcon={<DashboardIcon />}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                startIcon={<TableRestaurantIcon />}
                onClick={() => navigate("/table")}
              >
                Table
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                startIcon={<SportsFootballIcon />}
                onClick={() => navigate("/sport")}
              >
                Sport
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                startIcon={<NewspaperIcon />}
                onClick={() => navigate("/news")}
              >
                News
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                startIcon={<SettingsApplicationsIcon />}
                onClick={() => navigate("/settings")}
              >
                Settings
              </Button>
            </div>
          </ul>
        </div>
        <LogOut />
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
