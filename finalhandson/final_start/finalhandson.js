const $ = (selector) => document.querySelector(selector);
const quarters = [];
const sales = [];

const addValue = () => {
  const quartersValue = $("#name").value;
  const salesValue = $("#sales").value;

  quarters.push(quartersValue);
  sales.push(salesValue);
};

const displaySales = () => {
  let totalSales = 0;
  const quartersAmount = quarters.length;

  for (const sale of sales) {
    totalSales = totalSales + Number(sale);
  }

  let averageSales = totalSales / quartersAmount;

  $("#sales_display").value = averageSales;
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addValue);
  $("#display_sales").addEventListener("click", displaySales);
});
