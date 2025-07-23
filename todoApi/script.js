const formInput = document.querySelector("#task-input");
const formButton = document.querySelector("#add-task-btn");
const list = document.querySelector("#task-list")

// async function handleRequest(event){
//     event.preventDefault()
//     const userFormInput = formInput.value.trim()
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
//     let data = await response.json();

//     if(!userFormInput){
//         return;
//     }

//     list.innerHTML= '';
//     const li = document.createElement("li")
//     li.innerHTML = `<input
//     type="checkbox"
//     class='checkbox' >
//     <span>${userFormInput}</span>
//     <button class='edit-btn'><i class='fa-solid fa-pen'></i></button>
//     <button class= 'del-btn'><i class='fa-solid fa-trash'></button>`
//     list.appendChild(li)

// }

async function addTask(event) {
    event.preventDefault()

    const userInputValue = formInput.value.trim();
    if (!userInputValue) return;

    //post request 
    let sendResponse = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: userInputValue,
            completed: true
        })

    });
    let newTask = await sendResponse.json()
    console.log("task saved",newTask);
    console.log(sendResponse);
     newList(userInputValue);
    

    formInput.value = '';


}

function newList(userInputValue){
    const li = document.createElement('li')
    li.innerHTML =`<input type="checkbox" class='checkbox' >
     <span>${userInputValue}</span>
     <button class='edit-btn'><i class='fa-solid fa-pen'></i></button>
     <button class= 'del-btn'><i class='fa-solid fa-trash'></button>` 
     const checkbox = li.querySelector('.checkbox')
    // delete
    const delBtn = li.querySelector(".del-btn").addEventListener('click',()=>{
        li.remove()
    })

    //edit

    const editBtn = li.querySelector(".edit-btn").addEventListener('click', () => {
    const span = li.querySelector("span");
    if (!checkbox.checked) {
        formInput.value = span.textContent;
        li.remove();
    }
    })
    list.appendChild(li)
}

//get 
async function getTask(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    let data = await response.json();
    
    list.innerHTML= ''
    data.forEach(task => {
        newList(task.title)
    });
}

formButton.addEventListener('click', addTask);
document.addEventListener("DOMContentLoaded", getTask);