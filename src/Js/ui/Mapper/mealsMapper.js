// هو مو component
// هو:

// 🔥 UI View / Renderer

// 📌 مسؤوليته:

// يستلم data جاهزة (meals)
// يعرضها في DOM
// يستخدم components (mealCard) ; 

import {mapMeal,mapMealsLite,mapDetials} from "../../models/mealModel.js"


export function prepareMeals(apiMeals,category)
{
return apiMeals.map(meal=>mapMealsLite(meal,category));
}

export function prepareMealDetials(apiMealDetilas)
{
return mapDetials(apiMealDetilas);
}




//  page  = container
//  result = result . 
//  inputId  = input . 
//  btn-search = button search . 



