const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const todoRemove = document.querySelector('.todo-remove')

const toDoDate = JSON.parse(localStorage.getItem('todos')) || []

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    toDoDate.forEach(function (item, index) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            save()
            render()
        })

        li.querySelector('.todo-remove').addEventListener('click', function () {
            toDoDate.splice(index, 1)
            save()
            render()
        })
    })
}


todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    if (headerInput.value === "") {
        alert('Введите дело в поле')
    } else {
        const newToDo = {
            text: headerInput.value,
            completed: false
        }

        toDoDate.push(newToDo)
        headerInput.value = ""

        render();
        save();
    }
})

const save = function () {
    localStorage.setItem('todos', JSON.stringify(toDoDate))
}

render()