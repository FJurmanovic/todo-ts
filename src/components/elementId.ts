export default function elementId (item:Node) {
    let category = item.parentNode;
    for (const [key, child] of category.childNodes.entries()){
        if(item === child){
            let id:number = key;
            return id
        }
    }
}