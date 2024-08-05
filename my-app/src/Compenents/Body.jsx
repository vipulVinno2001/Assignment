import React, { useEffect, useState } from "react";
import usegetdata from "../Hooks/usegetdata";
import { useSelector } from "react-redux";
import TableContent from "./TableContent";

const Body = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [isClicked, setisClicked] = useState(false);
  const [search, setSearch] = useState("");

  const totalDataPerPage = 5;

  usegetdata();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const data = useSelector((store) => store?.product?.productDetails);

  const handleConsole = () => {
    console.log(search);

    const searchResult = data.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );
    setDataToDisplay(searchResult);
  };
  const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
  };
  const goOnNextPage = () => {
    if (currentPageNumber === data.length / totalDataPerPage) return;
    setCurrentPageNumber((prev) => prev + 1);
  };
  const handleSelectChange = (val) => {
    setCurrentPageNumber(val);
    setisClicked(!isClicked);
    console.log(currentPageNumber);
  };
  useEffect(() => {
    const start = (currentPageNumber - 1) * totalDataPerPage;
    const end = currentPageNumber * totalDataPerPage;
    if (data) {
      setDataToDisplay(data.slice(start, end));
    }
  }, [currentPageNumber]);

  if (!data) {
    return (
      <h1 className="text-center text-3xl font-semibold ">
        Loading Please Wait
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center p-6">
        Product Details
      </h1>
      <div>
        <input
          onChange={handleChange}
          type="text"
          className="ml-[42%] p-2 border-2 rounded-l-lg border-black "
        />
        <button
          onClick={handleConsole}
          className="rounded-r-lg bg-blue-400 p-2 border-b-2  border-r-2  border-t-2 border-black">
          Search
        </button>
      </div>{" "}
      {dataToDisplay && <TableContent item={dataToDisplay} />}
      <div className="flex p-6 justify-end gap-4 mr-[8%]">
        <h1 className="flex justify-center text-md  bg-gray-400 rounded-lg border border-2  w-32 mt-4 border-black">
          Current Page: {currentPageNumber}
        </h1>
        {data.length > 0 &&
          Array.from(Array(data.length / totalDataPerPage))
            .map((e, i) => i + 1)
            .map((val) => {
              return (
                <button
                  onClick={() => handleSelectChange(val)}
                  //onChange={handleSelectChange(val)}
                  className="bg-cyan-400 rounded-lg border border-2  w-12 "
                  key={val}>
                  {val}
                </button>
              );
            })}

        <button
          onClick={goOnPrevPage}
          className="p-2 border border-black-2 rounded-lg bg-green-300 hover:bg-green-400">
          Prev
        </button>
        <button
          onClick={goOnNextPage}
          className="p-2 border border-black-2 rounded-lg bg-green-300 hover:bg-green-400">
          Next
        </button>
      </div>
    </div>
  );
};

export default Body;
