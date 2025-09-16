
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productslices";
import cartReducer from "./slices/cartSlices";
import authReducer from "./slices/authSlices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,

  },
});
