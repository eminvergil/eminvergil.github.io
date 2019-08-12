// CODE EXPLAINED channel

//Select elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const hourElement = document.getElementById("hours");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST , id ;

// get item from localstorage
let data = localStorage.getItem("TODO");

//check if data is not empy
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set id to last one
    loadList(LIST); // load list to ui
}else{
    // if data is empty
    LIST = [];
    id = 0;
}
//load list to ui
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash);
    });
}
// clear the local storage
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

// Show todays date
const options = {weekday : "long" , month: "short" , day: "numeric" };
const today = new Date();
// hours 
const options_h = {hour: "numeric",minute:"numeric"};

hourElement.innerHTML = today.toLocaleTimeString("tr-TR",options_h);

dateElement.innerHTML = today.toLocaleDateString("tr-TR",options);

// add to do function

function addToDo(todo,id,done,trash){

    if(trash) {return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `
            <li class="item">
                <i class= "fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${todo}</p>
                <i class= "fa fa-trash-o de" job="delete" id="${id}"></i>
            </li>
    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position,item);
}

// add item to list when user enter the key

document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const todo = input.value;
        // if the input isnt empty
        if(todo){
            addToDo(todo,id,false,false);

            LIST.push({
                name:todo,
                id:id,
                done:false,
                trash:false
            });

            // add item to localstorage (this code must be added where the LIST array is updated)
            localStorage.setItem("TODO",JSON.stringify(LIST));
            
            id++;

        }
        input.value = "";

    }
});

//complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}


//target the items created dynamically

list.addEventListener("click",function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }

    // add item to localstorage (this code must be added where the LIST array is updated)
    localStorage.setItem("TODO",JSON.stringify(LIST));

});














