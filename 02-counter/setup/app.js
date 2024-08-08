const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let num = 0;

btns.forEach(((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.classList);
    const conuntNum = e.currentTarget.classList;
    if(conuntNum.contains("decrease")){
      num--;
    }
    else if(conuntNum.contains("increase")){
      num++;
    }
    else if(conuntNum.contains("reset")){
      num = 0;
    }
    if(num > 0){
      value.style.color = "green";
    }else if(num < 0){
      value.style.color = "red";
    }else if(num === 0){
      value.style.color = "#222";
    }
    value.innerHTML = num;
  })
}))