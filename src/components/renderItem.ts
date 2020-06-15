import handleCheck from './checkChanged';
import { lists } from './list';
import elementId from './elementId';

export default function renderItem(item, listId = 0, itemId = (lists.get()[0].items.length - 1)) {


    const itemDiv = document.createElement("div");
    itemDiv.className = "item"
    const itemInput = document.createElement("input");
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.innerHTML = `${item.text}`
    textDiv.setAttribute("contenteditable", "true")
    textDiv.addEventListener("focus", function () {
        textDiv.setAttribute("data", textDiv.innerHTML);
    });
    textDiv.addEventListener("blur", function () {
        const itemNode:Node = this.parentNode?.parentNode || new Node;
        const categoryNode:Node = itemNode.parentNode?.parentNode || new Node;
        if (textDiv.getAttribute("data") !== textDiv.innerHTML) {
            console.log(lists.get())
            lists.changeText(textDiv.innerHTML, elementId(categoryNode), elementId(itemNode))
        }
    });

    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltiptext";
    tooltipDiv.innerHTML = `${item.text}`
    
    sectionDiv.append(textDiv)
    sectionDiv.append(tooltipDiv)

    itemInput.setAttribute("type", "checkbox")
    if(item.checked) {
        itemInput.setAttribute("checked", "true")
    }
    itemInput.addEventListener("change", handleCheck)
    itemDiv.appendChild(itemInput)
    itemDiv.appendChild(sectionDiv)
    
    return itemDiv
}