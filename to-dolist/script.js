document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#task-input");
    const addbtn = document.querySelector("#add-task-btn");
    const list = document.querySelector("#task-list");
    const todoContainer = document.querySelector(".todos-container");

    const toggleEmptyState = () => {
        todoContainer.style.width = list.children.length > 0 ? "100%" : "50%";
    };
    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class='checkbox'>
            <span>${taskText}</span>
            <div class='task-button'>
                <button class='edit-btn'><i class='fa-solid fa-pen'></i></button>
                <button class='delete-btn'><i class='fa-solid fa-trash'></i></button>
            </div>
        `;
        const checkbox = li.querySelector('.checkbox')
        const editBtn = li.querySelector(".edit-btn").addEventListener("click", ()=>{
            if(!checkbox.checked){
                taskInput.value= li.querySelector('span').textContent;
                li.remove();
                toggleEmptyState();
            }
        })
        // DELETE functionality
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
            toggleEmptyState(); // Update container width after removal
        });

        list.appendChild(li);
        taskInput.value = '';
        toggleEmptyState(); // Update width after adding a task
    };

    addbtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            addTask(e);
        }
    });
});
