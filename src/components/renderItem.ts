import handleCheck from './checkChanged';

export default function renderItem(item) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item"
    const itemInput = document.createElement("input");
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.innerHTML = `${item.text}`

    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltiptext";
    tooltipDiv.innerHTML = `${item.text}`
    
    textDiv.append(tooltipDiv)

    sectionDiv.append(textDiv)

    itemInput.setAttribute("type", "checkbox")
    if(item.checked) {
        itemInput.setAttribute("checked", "true")
    }
    itemInput.addEventListener("change", handleCheck)
    itemDiv.appendChild(itemInput)
    itemDiv.appendChild(sectionDiv)
    
    return itemDiv
}