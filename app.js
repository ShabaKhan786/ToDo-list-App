


// var arr=["red","yellow","magenta","blue","pink","aqua"]

// let index=0;

// function chngeColor(){


// var box=document.querySelector(".box1")
// index=(index+1)%arr.length
// box.style.backgroundColor=arr[index];


//         let randomColor='#'+Math.floor(Math.random()*16777215)
//         var box=document.querySelector(".box1")
//         console.log(randomColor);

//         box.style.backgroundColor=randomColor;
// }

// setInterval(chngeColor,1000)


// const tooglebox=document.querySelector("#box1")
// const tooglebtn=document.querySelector("#toggleButton")

// tooglebtn.addEventListener("click",()=>{
//     if(tooglebox.style.display==="none"){
//         tooglebox.style.display="block"
//         tooglebox.style.backgroundColor="red"
//         tooglebox.innerHTML="Mai aa gya"
//         tooglebox.style.color="yellow"
//     }
//     else{
//         tooglebox.style.display="none"
//     }
// })

// const box=document.querySelector("#box1")
// const tBtn=document.querySelector("#toggleButton")

// tBtn.addEventListener("mouseenter",()=>{
//     box.style.backgroundColor="yellow"
//     box.style.border="3px solid black "
//     tBtn.style.backgroundColor="transparent"


// })
// tBtn.addEventListener("mouseout",()=>{
//     box.style.backgroundColor="pink"
//     box.style.border="2px solid black "
//     tBtn.style.backgroundColor="blue"
// })


const task = document.querySelector("#task")
const btn = document.querySelector("#btn")
const taskList = document.querySelector("#taskList")
function Add() {
        if (task.value == "") {
                alert("First Add task");

        }
        else {
                let newElem = document.createElement("li")
                newElem.innerHTML = `${task.value} <i class="fa-solid fa-trash"></i>`
                taskList.appendChild(newElem)
                task.value = ""
                newElem.querySelector("i").addEventListener("click", remove)
                function remove() {
                        newElem.remove()
                }
        }



}

