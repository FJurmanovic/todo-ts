import newItem from './newItem'

const Add = () => {
    let addDiv = document.createElement("div");
    addDiv.className = 'add'
    let addInput = document.createElement("input");
    addInput.setAttribute("type", "text");
    let addButton = document.createElement("button");
    addButton.innerHTML = "Add"
    addButton.addEventListener("click", newItem)
    addDiv.appendChild(addInput)
    addDiv.appendChild(addButton)

    return addDiv;
}

export default Add;
