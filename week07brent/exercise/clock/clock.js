"use strict";
const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let outside = "AM"
 
  if (hour > 12) {
    hour = hour - 12;
    outside = "PM"
  }

  $("#hours").innerHTML = padSingleDigit(hour);
  $("#minutes").innerHTML = padSingleDigit(minute);
  $("#seconds").innerHTML = padSingleDigit(second);
  $("#ampm").innerHTML = outside;
};

document.addEventListener("DOMContentLoaded", () => {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  setInterval(displayCurrentTime, 1000)
});
