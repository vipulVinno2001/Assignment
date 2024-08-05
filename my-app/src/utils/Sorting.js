import { useDispatch } from "react-redux";
import { addSlicedProducts, removeSlicedProducts } from "./dataSlice";

const Sorting = () => {


    const sortByPrice = ({ sortOrder, item }) => {

        const dispatch = useDispatch();
        const sortedItems = [...item].sort((a, b) => {
            const priceA = parseFloat(a.offer.price.replace(/[^0-9.-]+/g, ""));
            const priceB = parseFloat(b.offer.price.replace(/[^0-9.-]+/g, ""));
            dispatch(removeSlicedProducts());
            dispatch(addSlicedProducts(sortOrder === "asc" ? priceA - priceB : priceB - priceA));
        })
    }

    return { sortByPrice };



}

export default Sorting;


