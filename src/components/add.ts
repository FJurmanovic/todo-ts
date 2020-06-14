const Add = () => {
    let addDiv = document.createElement("div");
    let addInput = document.createElement("input");
    addInput.setAttribute("type", "text");
    let addButton = document.createElement("button");
    addButton.innerHTML = "Add"
    addDiv.appendChild(addInput)
    addDiv.appendChild(addButton)

    return addDiv;
}

export default Add;
