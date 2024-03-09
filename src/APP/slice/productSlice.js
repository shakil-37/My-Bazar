import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";
//

// 
//  create  thunk
export const productThunk = createAsyncThunk("api/productApi", async () => {
  const response = await productApi();
  return response.data;
});
// innitial state
const initialState = {
  productList: [],
  status: "",
};
//  handle actions  reducers
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      state.status = "get succesfull";
      state.productList = action.payload;
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});
//
export default productSlice.reducer;
