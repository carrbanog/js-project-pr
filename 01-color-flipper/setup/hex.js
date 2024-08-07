const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.querySelector(".btn-hero");

btn.addEventListener("click", function(){
  let newColor = "#";
  for(i=0; i<6; i++){
    newColor += hex[getRandomNumber()];
  }
  // console.log(newColor);
  color.innerText = newColor;
  document.body.style.backgroundColor = newColor;
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}
