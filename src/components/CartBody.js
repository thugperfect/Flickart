import React from "react";
import { useSelector } from "react-redux";

const CartBody = () => {
  const cartItems = useSelector((k) => k.cart.products);
  console.log(cartItems);
  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-3/5 min-h-[85vh] bg-gray-50  relative flex justify-center">
      <div className="w-full md:w-4/5 lg:w-3/5 h-[530px] overflow-y-auto overflow-x-hidden">
        <div className="">
        {cartItems.length > 0 ? (
          cartItems.map((k) => (
            <div className="h-[200px] border border-1 m-2 border-gray-300 shadow-md rounded-lg w-full"></div>
          ))
        ) : (
          <div className="font-bold text-2xl mx-auto flex justify-center items-center my-[50px]">
            Cart is Empty
          </div>
        )}
        </div>
        
      </div>
      <div className="absolute w-full h-[80px] bg-gray-200 bottom-0"></div>
    </div>
  );
};

export default CartBody;
