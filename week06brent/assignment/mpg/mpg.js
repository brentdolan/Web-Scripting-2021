"use strict";

const $ = (selector) => document.querySelector(selector);

const getErrorMsg = (lbl) => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = (selector) => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = (units, title) => {
  const inputValue = parseFloat($(units).value);

  if (isNaN(inputValue) || inputValue <= 0) {
    $(`${units}-span`).innerHTML = `${title} must be numeric and greater than zero`;
  } else {
    $(`${units}-span`).innerHTML = "";
  }
};
const MPG = () => {
  const milesValue = $("#miles").value
  const gallonsValue = $("#gallons").value
   $("#mpg").value = calculateMPG(milesValue, gallonsValue);
}

const clearEntries = () => {
  $("#miles").value = "";
  $("#miles-span").innerHTML = "*";
  $("#gallons").value = "";
  $("#gallons-span").innerHTML = "*";
  $("#mpg").value = "";
};

const doSomething = () => () => {};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", MPG);
  $("#clear").addEventListener("click", clearEntries);
  $("#miles").addEventListener("input", () => processEntries("#miles", "Miles"));
  $("#gallons").addEventListener("input", () => processEntries("#gallons", "Gallons"));
  $("#miles").focus();
});
