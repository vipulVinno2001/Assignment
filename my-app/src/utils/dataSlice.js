import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice(
    {
        name: 'products',
        initialState: {
            productDetails: [],
            slicedProducts: [],
        },
        reducers: {

            addProduct: (state, action) => {
                state.productDetails = action.payload;
            },
            addSlicedProducts: (state, action) => {
                state.slicedProducts = action.payload;
            },
            removeSlicedProducts: (state, action) => {
                state.slicedProducts.length = 0;
            }
        }
    }
)

export const { addProduct, addSlicedProducts, removeSlicedProducts } = dataSlice.actions;
export default dataSlice.reducer;