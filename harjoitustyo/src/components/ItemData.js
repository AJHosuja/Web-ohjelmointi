import React from 'react'
import { Link } from 'react-router-dom'

const ItemData = (props) => {
  return (
    <Link to={`/recipe/${props.data.id}`}>
    <div className='flex cursor-pointer bg-white w-[500px] h-[120px] mb-10 rounded-md shadow-lg p-2 items-center hover:bg-gray-300 transition-all'
    >
        <h1 className='flex-1 font-bold'>{props.data.title}</h1>
        <img src={props.data.image} className=" h-28 ml-4 rounded-md"/>
    </div>
    </Link>
  )
}

export default ItemData