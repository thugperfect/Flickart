import React, { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import DataContext from "../utils/DataContext";
const Header = () => {
  const { searchText, setSearchText, apiData,dataCategory } = useContext(DataContext);
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("");
  const [category,setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const setContext = (e) => {
    setSearch("")
     setSearchText(e);
  };
  useEffect(()=>{
    setCategory(dataCategory)
  },[dataCategory])
 
  const filterApiData = (data) => {
    setSearch(data);
    const dC = category.filter(k=>k.includes(data.toLowerCase()))
    setFilteredCategory(dC);
    const dataTitle = apiData.filter((k) =>
      k.title.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredData(dataTitle);
  };
  function enterToSearch(e){
    if(e.keyCode===13){
      setSearch("")
      setSearchText(e.target.value)
    }
  }
  return (
    <>
      <div className="w-full bg-blue-500 h-[80px] flex justify-center items-center cursor-default">
        <div className="w-[90%] flex items-center">
          <a href="/" className="text-white text-[30px] font-[600] m-3 italic">
            Flickart
          </a>
          <div className="flex w-full relative">
            <div className="w-[40px] h-[40px] bg-slate-200 rounded-l-lg flex justify-center items-center">
              <FiSearch className="text-[20px] text-gray-600" />
            </div>

            <input
              onInput={(e) => filterApiData(e.target.value)}
              onKeyUp={(e)=> enterToSearch(e)}
              value={search}
              type="text"
              className="w-full px-2 bg-slate-200 rounded-r-lg outline-none text-lg"
              placeholder="Search For Products, Categories and more..."
            />
            {search ? (
              <div className={(filteredCategory.length+filteredData.length)<=5?"z-10 absolute w-full top-[40px]  ":"z-10 absolute w-full top-[40px] h-[255px] overflow-y-scroll"}>
                <div className="h-[250px] ">
                {filteredCategory.map((k) => (
                  <div key={k} onClick={()=>setContext(k)} className="bg-slate-300 text-black h-[50px] px-4 flex flex-col justify-center border border-b-1">
                    {k}
                    <div className="text-xs">Categories</div>
                  </div>
                ))}
                {filteredData.map((k) => (
                  <div key={k.title} onClick={(e)=>setContext(k.title)} className="bg-slate-300 text-black h-[40px] px-4 flex items-center border border-b-1">
                    {k.title}
                  </div>
                ))}
                </div>
               
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            onClick={() => setContext(search)}
            className="px-4 py-2 bg-green-500 rounded-lg m-2 text-white font-bold"
          >
            Search
          </div>
          <div className="flex justify-center items-center m-3 text-white cursor-pointer">
            <BsCart3 className="text-white" /> &nbsp;Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
