import { lists } from './list';
import elementId from './elementId'


export default function handleCheck () {

    let item:Node = this.parentNode
    let category = item.parentNode;
    let target = (category.id == "todo_items") ? document.querySelector("#complete_items") : document.querySelector("#todo_items") 
    let catID = (category.id == "todo_items") ? 0 : 1
    
    lists.switch(catID, elementId(item));
    
    //changeEvent(catID, elementId(item), item)

    console.log(lists.get())

    category.removeChild(item)
    target?.append(item)
}

function changeEvent(listId:number, itemId:number, item) {
   
    item.removeEventListener("blur", () => {})
    item.addEventListener("blur", function () {
        
        if (item.getAttribute("data") !== item.innerHTML) {
            console.log(catID, elementId(item))
            if (listId == 0) {
                lists.changeText(item.innerHTML, 1, elementId(item))
            }else if (listId == 1) {
                lists.changeText(item.innerHTML, 0, elementId(item))
            }
        }
    });
}