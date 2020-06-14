export default function newItem() {
    let parent = this.parentNode;
    let input = parent.childNodes[0].value;

    document.getElementById("todo_items")?.insertBefore()
    console.log(input)
}