import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'

import wishlistReducer from './slices/wishListSlice'
import cartReducer from "./slices/cartSlice";

const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartReducer
    }
})

export default productStore