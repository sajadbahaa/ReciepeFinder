// 📌 هذا:

// orchestrator
// يربط كلشي ببعض

// 👉 هذا “مدير المطعم”

// need it into service 
// need it into redner dom .


import {getMealsByCategory,getMealsDetialsByName} from "./service/mealService.js";
import {prepareMeals,prepareMealDetials} from "./ui/Mapper/mealsMapper.js"
import {renderMeals,page,renderMealDetials} from "./ui/render.js"

const input = document.getElementById("inputId");
const btnSearch  = document.getElementById("btn-search");


async function loadMeals(value)
{
try
{
const apiMeals = await getMealsByCategory(value);

const meals = prepareMeals(apiMeals,value);

renderMeals(meals);
}
catch(e)
{
console.error(e);
// error in a result later . 
}
}
async function fetch_mealDetials(name)
{
try
{
const mealDetials =  await getMealsDetialsByName(name);
console.log(mealDetials);
if (!mealDetials)
    return;

renderMealDetials(prepareMealDetials(mealDetials[0]));
}
catch(e)
{
console.log(e);
}

}

function search()
{
const value = input.value.trim().toLowerCase();

if(!value) return;


const letter = value[0];

if(!/^[a-z]$/.test(letter))
{
input.value= "";
alert("Please enter a letter (a-z)");
return;
}
input.value="";    
loadMeals(letter);   
}


function filter()
{
const value = input.value.trim();

if(!value) return;
    
loadMeals(value);   
}

btnSearch.addEventListener("click",filter);

// add event to  page  for showing a dialog. 

page.addEventListener("click",renderDialog);

function renderDialog(e)
{
const card = e.target.closest(".item");
if (card)
{
    const card_name=  card.dataset.dataName;
    // fetch data 
fetch_mealDetials(card_name);
}

}


