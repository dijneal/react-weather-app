import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let zone = "AM";
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours > 12) {
    hours = hours - 12;
    zone = "PM";
  }

  return (
    <div>
      {day} {hours}:{minutes} {zone}
    </div>
  );
}
