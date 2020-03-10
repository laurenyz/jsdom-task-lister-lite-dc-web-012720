function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms))
}

document.addEventListener("DOMContentLoaded", loadDocument);

function loadDocument(){
  getForm().addEventListener("submit", processFormSubmit);
  startTimer();
}

function getForm(){
  return document.querySelector("#create-task-form")
}


function processFormSubmit(event){
  event.preventDefault()
  if (event.currentTarget.elements[0].value != ""){
    let newTask = event.currentTarget.elements[0].value
    let priority = event.currentTarget.priority.value
    addNewTask(newTask, priority)
    event.target.reset()
  }else{
    alert("IT BLANK")
  }

  
}

async function startTimer(){
  let countdown = document.getElementById("countdown");
  let num = parseInt(countdown.innerText);
  for (num; num>0; num -= 1){
    countdown.innerText=num;
    await sleep(100);
  }
  if( document.querySelectorAll("li").length > 20 ){
    alert("WOAH YOU GOT A LOT TO DO!")2     
  }else{
    alert("WOW YOU BORING LOSER")
  }


  
}


function addNewTask(str, prio) {
  let list = document.querySelector("#list > ul")
  let taskElement = document.createElement("li")
  let btn = document.createElement("button")
  btn.className = "delete"
  btn.innerText = "x"
  btn.addEventListener("click", ()=>{
    taskElement.remove()
  })
  btn.style.marginRight = "auto"
  taskElement.innerText = str
  

  if (prio === "high"){
    taskElement.style.backgroundColor = "seagreen"
  }else if(prio === "medium"){
    taskElement.style.backgroundColor = "lightgreen"
  }else{
    taskElement.style.backgroundColor = "mediumspringgreen"
  }

  taskElement.style.borderRadius = "5px"
  taskElement.style.padding = "5px 5px"
  taskElement.append(btn)
  list.appendChild(taskElement)
  
}
  



 