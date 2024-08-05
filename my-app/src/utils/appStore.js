import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "./dataSlice";


const appStore = configureStore({
    reducer: {
        product: dataReducer,

    }
})

export default appStore;