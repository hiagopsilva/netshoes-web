import { createSlice, configureStore } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
  },
  reducers: {
    addListProducts: (state, action) => {
      state.list = action.payload
    },
  },
})

const productActions = productSlice.actions

const productStore = configureStore({
  reducer: productSlice.reducer,
})

export { productStore, productActions }
