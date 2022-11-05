const initState=[]
export default function cartReducer(
    state=initState,
    action
    ){
    switch (action.type){
        case "MODIFY":
            return [...action.payload]
        default:
            return []
    }
}