import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemData from './ItemData';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropDown from './DropDown';

const diet = [
    {name: 'None'},
    {name: 'Vegetarian'},
    {name: 'Lacto-Vegetarian'},
    {name: 'Ovo-Vegetarian'},
    {name: 'Vegan'},
    {name: 'Pescetarian'},
    {name: 'Paleo'},
    {name: 'Primal'},
];

const cuisine = [
    {name: 'None'},
    {name: 'African'},
    {name: 'American'},
    {name: 'British'},
    {name: 'Cajun'},
    {name: 'Caribbean'},
    {name: 'Chinese'},
    {name: 'European'},
    {name: 'French'},
];

const meal_type = [
    {name: 'None'},
    {name: 'main course'},
    {name: 'side dish'},
    {name: 'dessert'},
    {name: 'appetizer'},
    {name: 'salad'},
    {name: 'bread'},
    {name: 'breakfast'},
    {name: 'soup'},
    {name: 'beverage'},
    {name: 'sauce'},
    {name: 'fingerfood'},
    {name: 'drink'},
];


const Content = () => {

    const [data, setData] = useState([]);
    const [urlParams, setUrlParams] = useState([]);
 
    useEffect(() => {


        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.REACT_APP_API_KEY)
                .then(res => {
                    setData(res.data.results)
                })
    }, [])


    const getRecipeWithParams = () => {

        var default_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.REACT_APP_API_KEY;
        if(urlParams.Diet) {

            const paramsToUrl = "&diet=" + urlParams.Diet.toLowerCase();
            default_URL = default_URL + paramsToUrl
        }
 
        
        if(urlParams.Cuisine) {
            const paramsToUrl = "&cuisine=" + urlParams.Cuisine.toLowerCase();
            default_URL = default_URL + paramsToUrl
        }

        if(urlParams.type) {
            const paramsToUrl = "&type=" + urlParams.type.toLowerCase();
            default_URL = default_URL + paramsToUrl
        }


       console.log(default_URL)
       axios.get(default_URL)
                .then((res) => {
                    setData(res.data.results)
                }
                )
    }

    useEffect(() => {
        console.log(urlParams);

        getRecipeWithParams();

    },[urlParams])

  return (

    <>
    <div className='flex flex-col items-center'> 
    <div className='flex flex-row space-x-5'>
    <DropDown data={diet} name={"Diet"} title={"Diet"} setUrlParams={setUrlParams} urlParams={urlParams}/>
    <DropDown data={cuisine} name={"Cuisine"} title={"Cuisine"} setUrlParams={setUrlParams} urlParams={urlParams}/>
    <DropDown data={meal_type} name={"type"} title={"Meal Type"} setUrlParams={setUrlParams} urlParams={urlParams}/>
    </div>
    <div className='mt-32'>
            {data.map((itemData) => {
                return (
                    <ItemData data={itemData} />
                    );
                })}
    </div>
    </div>
</>
  )
}

export default Content