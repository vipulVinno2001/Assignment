import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../utils/dataSlice';


const usegetdata = () => {

    const dispatch = useDispatch();
    const products = useSelector(store => store?.product?.productDetails);



    const getData = async () => {

        try {
            const res = await fetch('https://dummyjson.com/products');
            const result = await res.json();
            // console.log(result.products);
            dispatch(addProduct(result.products));
        }
        catch (error) {
            console.log(error)
        }





    }

    // console.log("Redux data is:")
    // console.log(products);

    useEffect(() => {
        if (products.length === 0) {
            getData();

        }
    }, [products
    ]);

    getData();





}

export default usegetdata;
