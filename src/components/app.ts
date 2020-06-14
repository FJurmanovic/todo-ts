import handleCheck from './checkChanged';

const App = (list: any[]) => {
    let listDiv = document.createElement("div");
    list.map((category, key) => {
        const catDiv = document.createElement("div");
        catDiv.id = `${category.title}`
        catDiv.innerHTML = `<h3>${category.title}<h3>`
        const itemContainer = document.createElement("div");
        itemContainer.id = `${category.title}_items`
        category.items.map((item:any[], id:number) => {
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
            itemContainer.appendChild(itemDiv)
        })
        catDiv.appendChild(itemContainer)
        listDiv.appendChild(
            catDiv
        )
    })

    return listDiv;
}

export default App;