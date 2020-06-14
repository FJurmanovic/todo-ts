import App from './components/app';
import Add from './components/add';


export let todoList = require('./model/todo.json'); 

let appID = document.querySelector('#app');

appID?.appendChild(Add())
appID?.appendChild(App(todoList))