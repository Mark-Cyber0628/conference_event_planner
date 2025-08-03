Slice = createSlice({
  name: 'ételek',
  initialState: [
    { name: 'Reggeli', cost: 50, selected: false },
    { name: 'Délutáni tea', cost: 25, selected: false },
    { name: 'Ebéd', cost: 65, selected: false },
    { name: 'Vacsora', cost: 70, selected: false },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;