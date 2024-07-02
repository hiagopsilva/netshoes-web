import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
  },
})

const productActions = counterSlice.actions

const productStore = configureStore({
  reducer: counterSlice.reducer,
})

export { productStore, productActions }
