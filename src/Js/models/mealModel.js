// 📌 مسؤول عن:

// شكل البيانات داخل تطبيقك
// mapping من API → app

// 👉 هذا “تنظيف وترتيب الأكل”


// استخدم function لما:
// مجرد mapping
// تحويل data
// stateless

// استخدم class لما:
// عندك behavior
// domain logic
// object حي داخل النظام

export function mapMeal(apiMeal)
{
return {
id:apiMeal.idMeal,
name:apiMeal.strMeal,
img:apiMeal.strMealThumb,
category: apiMeal.strCategory
};
}



export function mapMealsLite(meal,category)
{
return {
 id: meal.idMeal,
        name: meal.strMeal,
        img: meal.strMealThumb,
        category:category,
}
}

export function mapDetials(apiMeal)
{
return {
id : apiMeal.idMeal,
name:apiMeal.strMeal,
category:apiMeal.strCategory,
area:apiMeal.strArea,
instructions:mapeachDotIntoArray(apiMeal.strInstructions),
image:apiMeal.strMealThumb,
youtube:apiMeal.strYoutube,
ingredients:mapIngredients(apiMeal),
}
}

function mapeachDotIntoArray(str)
{
const steps = str.split(/step \d+/i).map(x=>x.trim()).filter(x=>x);
return steps;
}

function mapIngredients(apiMeal)
{
 const result = [] ;

  for (let i = 1; i <= 20; i++) {
    const name = apiMeal[`strIngredient${i}`];
    const measure = apiMeal[`strMeasure${i}`];

    if (name && name.trim()) 
    {
      result.push({ name, measure: measure?.trim() || "" });
    }
  }

return result;
}

