import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from "react-router-dom";

const RecipeData = () => {
  var { id } = useParams();
  const [itemData, setItemData] = useState([]);
  const [extendedIngredients, setExtendedIngredients] = useState([]);

  useState(() => {
    const url = "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=" + process.env.REACT_APP_API_KEY
    axios.get(url)
        .then((res) => {
                console.log(res.data)
                setItemData(res.data)
                setExtendedIngredients(res.data.extendedIngredients)
        })

    },[])
  return (
    <div className='flex justify-center mt-20 '>
    <div className='flex bg-white max-w-[1200px] rounded-lg shadow-xl'>
        <img src={itemData.image} className="rounded-lg"/>
        <div className='flex flex-col ml-5'>
        <h1 className='text-xl font-bold'>{itemData.title}</h1>
        <ul className='mx-2 mt-2'>
                {extendedIngredients.map((data) => {
                    return(
                        <li>{data.original}</li>
                        )
                    })}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default RecipeData