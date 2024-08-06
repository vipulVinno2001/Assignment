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
            removeProduct: (state, action) => {
                state.productDetails.length === 0;
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

export const { addProduct, removeProduct, addSlicedProducts, removeSlicedProducts } = dataSlice.actions;
export default dataSlice.reducer;