import { todoList } from '../index';

export default function handleCheck () {
    let item = this.parentNode
    let category = item.parentNode;
    let target = (category.id == "todo_items") ? document.querySelector("#complete_items") : document.querySelector("#todo_items") 

    category.removeChild(item)
    target?.insertBefore(item, target.childNodes[1])
}