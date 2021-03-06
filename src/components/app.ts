import renderItem from './renderItem';

function firstUpper(text:String): String {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

const App = (list: any[]) => {
    let listDiv = document.createElement("div");
    listDiv.className = "main";
    list.map((category, key) => {
        const catDiv = document.createElement("div");
        catDiv.id = `${category.title}`
        catDiv.className = `${category.title}`
        catDiv.innerHTML = `<div class="title">${firstUpper(category.title)}</div>`
        const itemContainer = document.createElement("div");
        itemContainer.id = `${category.title}_items`
        category.items.map((item:any[], id:number) => {
            itemContainer.appendChild(renderItem(item, key, id))
        })
        catDiv.appendChild(itemContainer)
        listDiv.appendChild(
            catDiv
        )
    })

    return listDiv;
}

export default App;