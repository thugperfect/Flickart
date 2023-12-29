import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import useFetchData from "../utils/customHooks/useFetchData";
const ProductBody = ({ id }) => {
  const [cart, setCart] = useState("Add to Cart");
  const params = useParams();
  const proId = params.id;
  const product = useFetchData("https://dummyjson.com/products/" + proId)
  
  if (!product) {
    return <></>;
  }
  return (
    <div>
      <div className="w-full min-h-[80vh] flex">
        <div className="w-1/3 p-2 flex">
          <div className="">
            {product.images?product.images.map((k,i) => (
              <img
              key={i}
                src={k}
                className="w-[50px] h-[50px] rounded-lg border border-1 border-black m-2"
                alt=""
              />
            )):""}
          </div>
          <div className=" m-2">
            <img src={product.thumbnail} alt="" />
          </div>
        </div>
        <div className="w-2/3 p-5">
          <div className="text-2xl">{product.title}</div>
          <div className="font-bold text-xl">{product.brand}</div>
          <div className="texl-xl">{product.description}</div>
          <div
            className={
              product.rating >= 4
                ? "bg-green-500 text-white font-bold text-lg p-1 flex items-center gap-2 w-[100px] justify-center m-2"
                : "bg-red-500 text-white font-bold text-lg p-1 flex items-center gap-2 w-[100px] justify-center m-2"
            }
          >
            <FaStar></FaStar>
            {product.rating}
          </div>
          <div className="h-[1px] border border-1 border-gray-700"></div>

          <div className="text-gray-500 text-sm line-through">
            {Math.floor(
              product.price + (product.discountPercentage * product.price) / 100
            )}{" "}
            $
          </div>
          <div className="text-2xl gap-4 flex items-center">
            <div className="text-4xl text-red-400">
              -{product.discountPercentage}%
            </div>
            {product.price} ${" "}
          </div>

          <div className="">(Inclusive All taxes)</div>
          <div className="h-[1px] border border-1 border-gray-700"></div>
          <div
            onClick={() => setCart(cart==="Add to Cart"?"Remove from Cart" :"Add to Cart")}
            className={
              cart === "Add to Cart"
                ? "h-[70px] w-[200px] justify-center flex items-center bg-orange-500 m-2 text-white text-xl cursor-pointer"
                : "h-[70px] w-[200px] justify-center flex items-center bg-red-500 m-2 text-white text-xl cursor-pointer"
            }
          >
            {cart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
