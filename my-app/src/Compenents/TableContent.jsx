import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSlicedProducts, removeSlicedProducts } from "../utils/dataSlice";

const TableContent = ({ item }) => {
  // Hooks
  const [sortOrderPrice, setSortOrderPrice] = useState("asc");
  const [sortOrderRate, setSortOrderRate] = useState("asc");
  const [sortCol, setSortCol] = useState("price");

  const handleSortPrice = () => {
    setSortCol("price");
    setSortOrderPrice(sortOrderPrice === "asc" ? "desc" : "asc");
  };

  const handleSortRate = () => {
    setSortCol("rating");
    setSortOrderRate(sortOrderRate === "asc" ? "desc" : "asc");
  };

  const sortedItems = [...item].sort((a, b) => {
    // // const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
    // const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

    if (sortCol === "price") {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrderPrice === "asc" ? priceA - priceB : priceB - priceA;
    } else {
      const rateA = a.rating;
      const rateB = b.rating;
      return sortOrderRate === "asc" ? rateA - rateB : rateB - rateA;
    }
  });

  return (
    <div className="flex justify-center">
      <table className="w-full ml-[10%] mr-[10%] mt-[2%] shadow shadow-black shadow-lg">
        <thead>
          <tr className="gap-4 border border-2 bg-blue-500 hover:text-white">
            <th className="border border-2 p-2 w-1/3">Brand</th>
            <th className="border border-2 p-2 w-1/4 cursor-pointer hover:scale-115">
              Name
            </th>
            <th className=" cursor-pointer  p-2 w-1/4 flex gap-4">
              Price
              <span className="flex gap-4">
                <button onClick={handleSortPrice}>
                  {sortOrderPrice === "asc" ? "↑" : "↓"}
                </button>
              </span>
            </th>
            <th className="border border-2 p-2 w-1/4">
              Rating
              <span className="flex gap-4">
                <button onClick={handleSortRate}>
                  {sortOrderRate === "asc" ? "↑" : "↓"}
                </button>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((i) => (
            <tr
              className="gap-4 border border-2 bg-blue-200 hover:bg-blue-300 hover:text-white  "
              key={i.id}>
              <td className="border border-2 p-2 text-justify w-1/3">
                {i.brand ? i.brand : "NA"}
              </td>
              <td className="border border-2 p-2 text-justify w-1/3">
                {i.title}
              </td>
              <td className="border border-2 p-2 text-justify w-1/4">
                {(i.price * 100).toFixed(2)}
              </td>
              <td className="border border-2 p-2 text-justify w-1/4">
                {i.rating.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
