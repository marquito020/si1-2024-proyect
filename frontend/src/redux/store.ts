import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/states/user.state";
/* import CartReducer from "../redux/states/cart.state"; */

export const store = configureStore({
  reducer: {
    user: UserReducer,
    /* cart: CartReducer, */
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
