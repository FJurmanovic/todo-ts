export default function elementId(item:Node): number  {
    let category = item.parentNode || new Node;
    for (const [key, child] of category.childNodes.entries()){
        if(item === child){
            let id:number = key;
            return id
        }
    }

    return 0
}