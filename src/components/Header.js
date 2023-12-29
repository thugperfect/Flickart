import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import DataContext from "../utils/DataContext";
const Header = () => {
  const { searchText, setSearchText } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const setContext = (e) => {
    setSearchText(e);
  };
  return (
    <>
      <div className="w-full bg-blue-500 h-[80px] flex justify-center items-center cursor-default">
        <div className="w-[90%] flex items-center">
          <a href="/" className="text-white text-[30px] font-[600] m-3 italic">
            Flickart
          </a>
          <div className="flex w-full ">
            <div className="w-[40px] h-[40px] bg-slate-200 rounded-l-lg flex justify-center items-center">
              <FiSearch className="text-[20px] text-gray-600" />
            </div>
            <input
              onInput={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full px-2 bg-slate-200 rounded-r-lg outline-none text-lg"
              placeholder="Search For Products, Categories and more..."
            />
          </div>
          <div
            onClick={() => setContext(search)}
            className="px-4 py-2 bg-green-500 rounded-lg m-2 text-white font-bold"
          >
            Search
          </div>
          {searchText}
          <div className="flex justify-center items-center m-3 text-white cursor-pointer">
            <BsCart3 className="text-white" /> &nbsp;Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
