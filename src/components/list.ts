export var lists = function() {
    let listFromStorage = JSON.parse(localStorage.getItem("lists"))
    let todoList = listFromStorage || require('../model/todo.json');
    return {
        get: function() {
            return todoList
        },
        add: function(text:string) {
            todoList[0].items.push(
                {
                    checked: false,
                    text: text
                }
            )
            localStorage.setItem("lists", JSON.stringify(todoList));
        },
        switch: function(listId:number, itemId:number) {
            
            this.changeChecked(listId, itemId)
            let item = todoList[listId].items[itemId]
            if (listId == 0) {
                todoList[1].items.push(item)
            }else if (listId == 1) {
                todoList[0].items.push(item)
            }
            todoList[listId].items.splice(itemId, 1)
            localStorage.setItem("lists", JSON.stringify(todoList));
        },
        changeChecked: function(listId:number, itemId:number) {
            let item = todoList[listId].items[itemId]
            todoList[listId].items[itemId].checked = !item.checked
            localStorage.setItem("lists", JSON.stringify(todoList));
        },
        changeText: function(newText:string, listId:number, itemId:number) {
            todoList[listId].items[itemId].text = newText
            localStorage.setItem("lists", JSON.stringify(todoList));
        },
        removeItem: function(listId:number, itemId:number) {
            todoList[listId].items.splice(itemId, 1)
            localStorage.setItem("lists", JSON.stringify(todoList));
        }
    }
}();