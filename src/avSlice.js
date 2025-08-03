import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "",
        name: "Projektorok",
        cost: 200,
        quantity: 0,
    },
    {
        img: "",
        name: "Hangszóró",
        cost: 35,
        quantity: 0,
    },
    {
        img: "",
        name: "Mikrofonok",
        cost: 45,
        quantity: 0,
    },
    {
        img: "",
        name: "Fehértáblák",
        cost: 80,
        quantity: 0,
    },

    {
        img: "",
        name: "Jelzések",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;