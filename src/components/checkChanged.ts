import { lists } from './list';
import elementId from './elementId'


export default function handleCheck () {

    let item:Node = this.parentNode
    let category = item.parentNode;
    let target = (category.id == "todo_items") ? document.querySelector("#complete_items") : document.querySelector("#todo_items") 
    let catID = (category.id == "todo_items") ? 0 : 1
    
    lists.switch(catID, elementId(item));

    console.log(lists.get())

    category.removeChild(item)
    target?.append(item)
}