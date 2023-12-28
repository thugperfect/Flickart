import React from 'react'
import { FaStar } from "react-icons/fa";
const Product = ({data}) => {
  return (
    <div className='w-[250px] h-[500px] rounded-lg border border-1 border-gray-200'>
    <img src={data.thumbnail} className="w-[250px] h-[250px] rounded-t-lg bg-slate-300" alt={data.name}/>
    <div className="flex flex-col p-2">
    <div className="font-bold flex justify-center m-2">{data.brand}</div>  
    <div className="text-lg flex justify-center">{data.title.length>22?data.title.slice(0,22)+"...":data.title}</div>
    <div className="text-md flex justify-center">{data.description.length>45?data.description.slice(0,45)+"...":data.description}</div>
    <div className="flex justify-center items-end gap-2">
    <div className="flex  text-xl font-semibold">{data.price} $</div>
    <div className="text-gray-500 text-sm line-through">{Math.floor(data.price+((data.discountPercentage*data.price)/100))} $</div>
    <div  className={data.rating>=4?"bg-green-500 text-white font-bold text-lg p-1 flex items-center":"bg-red-500 text-white font-bold text-lg p-1 flex items-center"}><FaStar></FaStar>{data.rating}</div>
    </div>
   
    </div>
    
    </div>
  )
}

export default Product
