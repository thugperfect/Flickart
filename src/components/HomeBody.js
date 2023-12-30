import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
  GiSmartphone,
  GiWatch,
  GiConverseShoe,
  GiLargeDress,
  GiSunglasses,
} from "react-icons/gi";

import { FaLaptop } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import Product, { discountedLabel } from "./Product";
import Shimmer from "./Shimmer";
import DataContext from "../utils/DataContext";
import { useOnlineStatus } from "../utils/customHooks/useOnlineStatus";

const HomeBody = () => {
  const { searchText, setSearchText, apiData, dataCategory } =
    useContext(DataContext);

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  const [products, setProducts] = useState([]);
  const [modifyingProducts, setModifyingProducts] = useState([]);
  const [filterCount, setFilterCount] = useState(1);

  const DiscountProduct = discountedLabel(Product);
  function pagination(no) {
    const changeData = products.filter((k, i) => {
      if (i < no * 25 && i >= (no - 1) * 25) {
        return true;
      }
    });

    setModifyingProducts(changeData);
    setFilterCount(no);
  }
  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      const shuffledData = data.products.sort(() => Math.random() - 0.5);
      setProducts(shuffledData);

      const changeData = data.products.filter((k, i) => {
        if (i < 25) {
          return true;
        }
      });
      setModifyingProducts(changeData);
    } catch (error) {
      console.log("Error fetching data");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function filterSearch() {
    const filterSearch = products.filter((k) => {
      return (
        k.category.toLowerCase().includes(searchText.toLowerCase()) ||
        k.title.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setModifyingProducts(filterSearch)
  }
  useEffect(() => {
    filterSearch();
  }, [searchText]);
  const pageArray = [1, 2, 3, 4];
  const catagoryArr = [
    {
      text: "Smartphones",
      element: <GiSmartphone className="text-[40px]" />,
    },
    {
      text: "Laptops",
      element: <FaLaptop className="text-[40px]" />,
    },
    {
      text: "Watches",
      element: <GiWatch className="text-[40px]" />,
    },
    {
      text: "Shoes",
      element: <GiConverseShoe className="text-[40px]" />,
    },
    {
      text: "Dresses",
      element: <GiLargeDress className="text-[40px]" />,
    },
    {
      text: "Furniture",
      element: <LuArmchair className="text-[40px]" />,
    },
    {
      text: "Sunglasses",
      element: <GiSunglasses className="text-[40px]" />,
    },
  ];
  const filterFn = (text) => {
    const filterCategories = products.filter((k) => {
      return k.category.includes(text.toLowerCase());
    });
    setModifyingProducts(filterCategories);
  };
  return (
    <div>
      <div className=" h-[150px] bg-white m-3 flex justify-center items-center">
        <div className="w-[80%] h-full flex justify-center items-center">
          {catagoryArr.map((k, i) => (
            <div
              key={i}
              onClick={() => filterFn(k.text)}
              className="m-2  flex flex-col items-center cursor-pointer"
            >
              <div className="">{k.element}</div>
              <div className="">{k.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" h-500px bg-white m-3 flex gap-2 flex-wrap justify-center p-3">
        {modifyingProducts.length > 0 ? (
          modifyingProducts.map((k) =>
            k.discountPercentage > 15 ? (
              <DiscountProduct key={k.id} data={k} />
            ) : (
              <Product key={k.id} data={k} />
            )
          )
        ) : (
          <Shimmer />
        )}
      </div>
      <div className="flex justify-center">
        {modifyingProducts.length === 25 ? (
          <div className="flex bg-white">
            {pageArray.map((k) => (
              <div
                key={k}
                onClick={() => pagination(k)}
                className={
                  filterCount === k
                    ? "w-[40px] bg-slate-500 h-[40px] flex justify-center items-center cursor-pointer outline outline-1"
                    : "w-[40px] h-[40px] flex justify-center items-center cursor-pointer outline outline-1"
                }
              >
                {k}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="h-[20px] w-full"></div>
    </div>
  );
};
export default HomeBody;
