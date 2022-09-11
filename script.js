const getInputId = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";
    return inputValue;
}

const addToDoList = () => {
    const inputField = getInputId('todo-field');
    const todos = JSON.parse(localStorage.getItem('TODO'));
    if (!todos) {
        const todoList = [
            { title: inputField, complated: false }
        ];
        const todoListString = JSON.stringify(todoList);
        localStorage.setItem('TODO', todoListString);
    }
    else {
        const todoList = [
            ...todos,
            { title: inputField, complated: false }
        ];
        const todoListString = JSON.stringify(todoList);
        localStorage.setItem('TODO', todoListString);
    }
    displayRinder();
}

const displayRinder = () => {
    const displayTodo = JSON.parse(localStorage.getItem('TODO'));
    const ulContainer = document.getElementById('todo-list');
    ulContainer.textContent = "";
    displayTodo.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('py-3');
        li.innerText = item.title;
        ulContainer.appendChild(li);
    });
}

const clearItemList = () => {
    localStorage.clear();
    displayRinder();
}

displayRinder()