import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "helyszín",
  initialState: [
    {
      img: "",
      name: "Konferenciaterem (Kapacitás:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "",
      name: "Auditorium (Kapacitás:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "",
      name: "Prezentációs terem (Kapacitás:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "",
      name: "Nagy tárgyaló (Kapacitás:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "",
      name: "Kis tárgyaló (Kapacitás:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium (Kapacitás:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;