export var lists = function() {
    let todoList = require('../model/todo.json'); 

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
        },
        changeChecked: function(listId:number, itemId:number) {
            let item = todoList[listId].items[itemId]
            todoList[listId].items[itemId].checked = !item.checked
        }
    }
}();