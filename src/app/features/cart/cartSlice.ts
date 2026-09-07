import { createSlice } from "@reduxjs/toolkit";

import type {
  PayloadAction,
} from "@reduxjs/toolkit";

import type {
  ZoraysShopProduct,
} from "../../../Data/shop/zoraysShopProductsData";


/* ============================================================
   TYPES
   ============================================================ */

export type CartItem = ZoraysShopProduct & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type AddToCartPayload = {
  product: ZoraysShopProduct;
  quantity: number;
};


/* ============================================================
   INITIAL STATE
   ============================================================ */

const initialState: CartState = {
  items: [],
};


/* ============================================================
   CART SLICE
   ============================================================ */

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (
      state,
      action: PayloadAction<AddToCartPayload>
    ) => {
      const {
        product,
        quantity,
      } = action.payload;

      const safeQuantity =
        Math.max(1, quantity);

      const existingItem =
        state.items.find(
          (item) =>
            item.id === product.id
        );

      if (existingItem) {
        existingItem.quantity +=
          safeQuantity;

        return;
      }

      state.items.push({
        ...product,
        quantity: safeQuantity,
      });
    },


    increaseCartQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item =
        state.items.find(
          (cartItem) =>
            cartItem.id ===
            action.payload
        );

      if (!item) {
        return;
      }

      item.quantity += 1;
    },


    decreaseCartQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item =
        state.items.find(
          (cartItem) =>
            cartItem.id ===
            action.payload
        );

      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },


    removeFromCart: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !==
            action.payload
        );
    },


    clearCart: (state) => {
      state.items = [];
    },
  },
});


/* ============================================================
   ACTIONS
   ============================================================ */

export const {
  addToCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;


/* ============================================================
   REDUCER
   ============================================================ */

export default cartSlice.reducer;