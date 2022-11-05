import cartReducer from "./cartReducer";

const rootReducer=()=>({
    cartItems: cartReducer
})

export default rootReducer