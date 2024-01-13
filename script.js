const Button = document.querySelector(".btn");
const Mid = document.querySelector(".mid");
const Store = document.querySelector("#store");
const Form = document.querySelector("form");

const Show = document.querySelector("#show");
const Body = document.body;

function execute(event) {
  let Hrs = Form.hrs.value;
  let Mins = Form.mins.value;
  let Secs = Form.secs.value;

  Show.remove();

  const NewDiv = document.createElement("div");
  NewDiv.className = "new";
  NewDiv.innerHTML = `
    <p id="tL">Time Left :</p>
    <p id="time">${Hrs} : ${Mins} : ${Secs} </p> 
    <button id="btn1" onclick="del(this)">Delete</button>
    `;

  let timeLeft =  NewDiv.querySelector("#tL"); 
  let timePara = NewDiv.querySelector("#time");
  let Btn2 = NewDiv.querySelector("#btn1");

  let countDown = setInterval(() => {
    Secs--;
    if(Secs < 0){
        Secs = 59;
        Mins--;
    }
    if(Mins < 0){
        Mins = 59;
        Hrs--;
    }
    if(Hrs < 0){
        clearInterval(countDown);

        timeLeft.remove();
        timePara.remove();
        const timesUp = document.createElement("h1");
        timesUp.innerText = "Time is Up!!";
        timesUp.style.color = "#34344a";

        NewDiv.insertBefore(timesUp,Btn2); 
        NewDiv.style.backgroundColor = "rgba(240, 247, 87, 1)";

        Btn2.style.backgroundColor = "#34344a";
        Btn2.style.color = "white";
        Btn2.innerText = "Stop";


    }
    else{
        timePara.innerText = `${Hrs} : ${Mins} : ${Secs}`;
    }
  },1000);

  Store.appendChild(NewDiv);

  Form.reset();
}
if(Store.childElementCount == 0){
    Body.appendChild(Show);
}
function del(deleteBtn) {
  deleteBtn.parentNode.remove();
}
Button.addEventListener("click", execute);
