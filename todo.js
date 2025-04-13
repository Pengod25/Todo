let todos = JSON.parse(localStorage.getItem('todos'))
if(!todos){
    todos = []
}



const input = document.getElementById('input')
const checkbox = document.querySelector('.checkbox')
const paddo = document.querySelector('.paddo')
function render(){
    let todoLists = ''
    for(let i = 0; i < todos.length; i++){
        let html = `<div class = 'paragraph'> <p> <input type = 'checkbox' class = 'checkbox'><span class= 'paddo'>${todos[i]} </span></p> </div><button
        onclick = 'todos.splice(${i}, 1)
         render()
         saveTodo()
        '
        class = 'button'> <img src = 'delete_24dp_00FFC4_FILL0_wght400_GRAD0_opsz24.svg'> </button>`
        todoLists += html
    }
    document.querySelector('.display').innerHTML = todoLists
}

render()
saveTodo()

function saveTodo(){
    localStorage.setItem('todos', JSON.stringify(todos))
}
document.querySelector('.add').addEventListener('click', () => {
    todos.push(input.value)
    render()
    saveTodo()
    input.value = ''
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        todos.push(input.value)
        render()
        saveTodo()
        input.value = ''
    }
})