import {createMealCard} from "./components/mealCard.js";
import {createMealDetials} from "./components/mealDetials.js"
 
export const page = document.getElementById('page');
const result = document.getElementById("result");


export function renderMealDetials(mealDetials)
{
const dialog = createMealDetials(mealDetials);
page.appendChild(dialog);

const videoLink = document.querySelector(".meal-video");

videoLink.addEventListener("click",function(e)
{
e.preventDefault();
const url = this.href;
window.open
(
url,"_blank","width=900,height=600"
);
})

const btnClose   = dialog.querySelector(".close-btn");
btnClose.addEventListener("click",()=>
    {
    dialog.close();
    dialog.remove();
    }
);
dialog.showModal();



}

function changeResult(meals)
{
result.innerHTML= meals?.length?`Search result : ${meals.length}`:`No result found `;
}

function clear()
{
result.innerHTML = "";
const oldGrid = document.querySelector(".grid");
if (oldGrid) oldGrid.remove();
}

export function renderMeals(meals)
{
// 1  reset UI parts 
clear();

// 2  status result 
changeResult(meals);

// create grid 
const grid = document.createElement('div');
grid.classList.add("grid");

meals.forEach(meal => {
    grid.appendChild(createMealCard(meal));
});

// Attach to page.
page.appendChild(grid);
}



