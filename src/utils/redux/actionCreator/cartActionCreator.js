const emitModifyAction=(payload)=>{
    return {
        type:"MODIFY",
        payload
    }
}
//添加到购物车
export const emitAddAction=(data=[],itemToAdd)=>{
    const res=data.slice(0)
    return emitModifyAction([...res,itemToAdd])
}
export const emitDeleteAction=(data=[],itemToDelete)=>{
    const {id}=itemToDelete;

    return emitModifyAction(data.filter(i=>i.id!==id))
}
export const emitReduceOrAddItem=(data=[],item,type)=>{
    const {id}=item;
    const itemObj=data.find(e=>e.id===id);
    if (itemObj){
        if (type==='ADD'){
            itemObj.count=itemObj.count+1;
            itemObj.price=(itemObj.singlePrice)*itemObj.count
        }else {
            itemObj.count=itemObj.count-1;
            itemObj.price=(itemObj.singlePrice)*itemObj.count
        }
    }
    return emitModifyAction(data)
}
