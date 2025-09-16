
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return [
    { id: 1, title: "Laptop", price: 1000, imageUrl: "/images/laptop.png" },
    { id: 2, title: "Phone", price: 600, imageUrl: "/images/phone.png" },
    { id: 3, title: "Headphones", price: 120, imageUrl: "/images/headphones.png" },
  ];
});

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      });
  },
});

export default productsSlice.reducer;
