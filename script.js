const div = document.getElementsByClassName("container")[0];
const circle = document.getElementsByClassName("circle")[0];
console.log(div);
let left = true;

circle.addEventListener("click", function () {
  if (left) {
    div.style.backgroundColor = "#7aeadf";
    div.style.justifyContent = "flex-end";
    left = false;
  } else {
    div.style.backgroundColor = "#cfd8ef";
    div.style.justifyContent = "flex-start";
    left = true;
  }
});
