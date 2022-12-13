import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./EventCalendar.module.scss";

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (date) => {
    setDate(date);
  };

  return (
    <div className={styles.calendarBlock}>
      <Calendar onChange={onChangeDate} value={date} />
    </div>
  );
};

export default EventCalendar;
