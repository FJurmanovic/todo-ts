import newItem from './newItem'

const Add = () => {
    let addDiv = document.createElement("div");
    addDiv.className = 'add'
    let addInput = document.createElement("input");
    addInput.setAttribute("type", "text");
    addInput.setAttribute("placeholder", "Add new todo")
    let addButton = document.createElement("button");
    addButton.innerHTML = "<div class='gg-math-plus'></div>"
    addButton.addEventListener("click", newItem)
    addButton.className = "btn btn-icon-round"
    addDiv.appendChild(addInput)
    addDiv.appendChild(addButton)

    return addDiv;
}

export default Add;
