import React from "react";
import styles from "./Settings.module.scss";

const Settings = () => {
  return (
    <div className={styles.settingsBlock}>
      <h2>Settings</h2>
      <div className={styles.settingsInput}>
        <label htmlFor="firstInput">Setting 1</label>
        <input type="checkbox" id="firstInput" />
      </div>
      <div className={styles.settingsInput}>
        <label htmlFor="secondInput">Setting 2</label>
        <input type="checkbox" id="secondInput" />
      </div>
      <div className={styles.settingsInput}>
        <label htmlFor="thirdInput">Setting 3</label>
        <input type="checkbox" id="thirdInput" />
      </div>
      <div className={styles.settingsInput}>
        <label htmlFor="forthInput">Setting 4</label>
        <input type="checkbox" id="forthInput" />
      </div>
      <div className={styles.settingsInput}>
        <label htmlFor="fifthInput">Setting 5</label>
        <input type="checkbox" id="fifthInput" />
      </div>
    </div>
  );
};

export default Settings;
