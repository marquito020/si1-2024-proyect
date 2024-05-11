/* import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShoppingCart } from "../../interfaces/cart.interface";

const EmptyCartState: ShoppingCart[] = [];

const persistLocalStorageCart = (cart: ShoppingCart[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clearLocalStorageCart = () => {
  localStorage.removeItem("cart");
};

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart") as string) as ShoppingCart[])
    : EmptyCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShoppingCart>) => {
      state.push(action.payload); // adiciono un elemento a mi carrito
      persistLocalStorageCart(state);
    },
    removePhoto: (state, action: PayloadAction<ShoppingCart>) => {
      const photoFound = state.find(
        (photo) => photo.photoId === action.payload.photoId
      );
      if (photoFound) { 
        state.splice(state.indexOf(photoFound), 1);
        persistLocalStorageCart(state);
      }
    },
    resetCart: (state) => {
      clearLocalStorageCart();
      return EmptyCartState;
    },
  },
});

export const { addToCart, removePhoto, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
 */