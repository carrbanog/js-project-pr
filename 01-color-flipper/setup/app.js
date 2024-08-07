const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const form = document.querySelector("form");
const searchColor = document.querySelector(".searchColor");

btn.addEventListener("click", function(){
  //get random number between 0-3
  const randNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randNumber];
  color.innerHTML = colors[randNumber];
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}


// 입력값을 받아 색상 변경
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   newColor = searchColor.value;
//   document.body.style.backgroundColor = newColor;
//   color.innerText = newColor;
//   searchColor.value = "";
// })

