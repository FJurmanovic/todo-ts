import { lists } from './list';
import renderItem from './renderItem';


export default function newItem() {
    let parent = this.parentNode;
    let input = parent.childNodes[0].value;

    lists.add(input)
    
    let todoID = document.querySelector("#todo_items")

    todoID?.append(renderItem({
        checked: false,
        text: input
    }))
}