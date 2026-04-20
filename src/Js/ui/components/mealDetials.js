// meal detials by name. 


 
export function createMealDetials(mealDetials)
{
const container = document.createElement("dialog");
container.classList.add("meal-details","container");
container.innerHTML = `
<button class="close-btn"><i class="fa-solid fa-circle-xmark"></i></button>
<div class="meal-header">
<img class="meal-img" src=${mealDetials.image} alt=${mealDetials.name} loading="lazy">
<h2 class="meal-title">${mealDetials.name}</h2>
<p class="meal-meta">Category: ${mealDetials.category} | Area: ${mealDetials.area}</p>
</div><hr>
<div class="mael-body flex"> 
<div class="meal-ingredients">
    <h3>Ingredients</h3>
      </div>
<div class="meal-instructions">
      <h3>Instructions</h3>
        </div>
    </div>
<div class="links flex">
<a href=${mealDetials.youtube} class="meal-video" ><i class="youtube fa-brands fa-youtube"></i> watch on a youtube</a>
</div>
`;
if (!mealDetials.ingredients)
    {
console.log("ingredients  not found");
    }

    if (!mealDetials.instructions)
        {
console.log("Instructinos  not found");
    
        }
    container.querySelector(".meal-ingredients")
        .append(createIngredients(mealDetials.ingredients));
// ingredients
    container.querySelector(".meal-instructions")
        .append(createInstructions(mealDetials.instructions));
    return container;
}


function createIngredients(ingredients) {
  const ul = document.createElement("ul");
  ul.classList.add("meal-list");

  for (const ingredient of ingredients) {
    const li = document.createElement("li");
    li.classList.add("ingredient-step");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle");

    const text = `${ingredient.name} - ${ingredient.measure}`;

    li.append(icon, " " + text);
    ul.appendChild(li);
  }

  return ul;
}


function createInstructions(instructions)
{
console.log(instructions);
const ul = document.createElement("ul");
ul.classList.add("meal-list");
for(let i = 0;i<instructions.length;i++)
    {
    const li=  document.createElement("li");
    li.classList.add("instruction-step");
    const span = document.createElement("span");
    span.textContent = `${i+1}`; 
li.append(span," " + instructions[i]);

ul.appendChild(li);
    }
    return ul;
}




