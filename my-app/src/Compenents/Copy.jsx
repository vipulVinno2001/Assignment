import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSlicedProducts, removeSlicedProducts } from "../utils/dataSlice";

const TableContent = ({ item }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const dispatch = useDispatch();

  dispatch(addSlicedProducts(item));

  const items = useSelector((store) => store?.product?.slicedProducts);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    const sortedItems = [...item].sort((a, b) => {
      // // const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      // const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
    dispatch(removeSlicedProducts());
    console.log("items are");
    console.log(items);
    dispatch(addSlicedProducts(sortedItems));
  };

  const sortedItems = [...item].sort((a, b) => {
    // // const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
    // const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    const priceA = a.price;
    const priceB = b.price;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className="flex justify-center">
      <table className="w-full ml-[10%] mr-[10%] mt-[5%] shadow shadow-black shadow-lg">
        <thead>
          <tr className="gap-4 border border-2 bg-blue-500 hover:text-white">
            <th className="border border-2 p-2 w-1/3">Brand</th>
            <th className="border border-2 p-2 w-1/4 cursor-pointer hover:scale-115">
              Name
              {/* <button onClick={handleSort} className="h-6 w-6 font-bold ">
                {sortOrder === "asc" ? "↑" : "↓"}
              </button> */}
            </th>
            <th
              onClick={handleSort}
              className=" cursor-pointer border border-2 p-2 w-1/4">
              Price {sortOrder === "asc" ? "↑" : "↓"}
            </th>
            <th className="border border-2 p-2 w-1/4">Rating</th>
          </tr>
        </thead>
        <tbody>
          {item.map((i) => (
            <tr
              className="gap-4 border border-2 bg-blue-200 hover:bg-blue-300 hover:text-white  "
              key={i.id}>
              <td className="border border-2 p-2 text-justify w-1/3">
                {i.brand}
              </td>
              <td className="border border-2 p-2 text-justify w-1/3">
                {i.title}
              </td>
              <td className="border border-2 p-2 text-justify w-1/4">
                {i.price}
              </td>
              <td className="border border-2 p-2 text-justify w-1/4">
                {i.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
