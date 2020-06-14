import handleCheck from './checkChanged';

export default function renderItem(item) {
    const itemDiv = document.createElement("div");
    const itemInput = document.createElement("input");
    const itemSpan = document.createElement("span");
    itemInput.setAttribute("type", "checkbox")
    if(item.checked) {
        itemInput.setAttribute("checked", "true")
    }
    itemInput.addEventListener("change", handleCheck)
    itemSpan.innerHTML = `${item.text}`
    itemDiv.appendChild(itemInput)
    itemDiv.appendChild(itemSpan)
    
    return itemDiv
}