import App from './components/app'

let todoList = require('./model/todo.json'); 

document.querySelector('#app')?.appendChild(App(todoList))