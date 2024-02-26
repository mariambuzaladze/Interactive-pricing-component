const input = document.getElementsByClassName("range-input")[0];
const pageviews = document.getElementsByClassName("pageviews")[0];

const pay = document.getElementsByClassName("pay")[0];
const month = document.getElementsByClassName("month")[0];

let oldPrice = Number(pay.textContent.split("$")[1]);
let newPrice = oldPrice * 3;

function renewPrice() {
  oldPrice = Number(pay.textContent.split("$")[1]);
  newPrice = oldPrice * 3;

  if (!left) {
    pay.textContent = `$${newPrice}.00`;
  }
}

input.addEventListener("input", function () {
  let currentValue = Number(input.value);

  input.style.background = `linear-gradient(to right, #a4f3eb ${currentValue}%, #ccc ${currentValue}%)`;

  if (currentValue >= 0 && currentValue < 25) {
    pageviews.textContent = "10K PAGEVIEWS";
    pay.textContent = "$8.00";

    renewPrice();
  } else if (currentValue >= 25 && currentValue < 50) {
    pageviews.textContent = "50K PAGEVIEWS";
    pay.textContent = "$12.00";

    renewPrice();
  } else if (currentValue >= 50 && currentValue < 75) {
    pageviews.textContent = "100K PAGEVIEWS";
    pay.textContent = "$16.00";

    renewPrice();
  } else if (currentValue >= 75 && currentValue < 100) {
    pageviews.textContent = "500K PAGEVIEWS";
    pay.textContent = "$24.00";

    renewPrice();
  } else {
    pageviews.textContent = "1M PAGEVIEWS";
    pay.textContent = "$36.00";

    renewPrice();
  }
});

const div = document.getElementsByClassName("container")[0];
const circle = document.getElementsByClassName("circle")[0];

let left = true;

circle.addEventListener("click", function () {
  if (left) {
    div.style.backgroundColor = "#7aeadf";
    div.style.justifyContent = "flex-end";

    pay.textContent = `$${newPrice}.00`;
    left = false;
  } else {
    div.style.backgroundColor = "#cfd8ef";
    div.style.justifyContent = "flex-start";

    pay.textContent = `$${oldPrice}.00`;

    left = true;
  }
});
