// 📌 مسؤول عن:

// API calls
// التعامل ويا server

// 👉 هذا “المطبخ الخارجي”


const APIEndPoints =
{
baseAPi : "https://www.themealdb.com/api/json/v1/1/",
}

// EndPoint  Get 


export async function getMealsByLetter(letter)
{
try
{
const response = await fetch(`${APIEndPoints.baseAPi}search.php?f=${letter}`);
if (!response.ok)
    {
throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.meals || [];

}catch(error)
{
console.error("Error fetching meals:", error);

        // 🔥 حتى لو error → رجع empty list
        return [];
}
}

export async function getMealsByCategory(category)
{
try
{
const response = await fetch(`${APIEndPoints.baseAPi}filter.php?c=${category}`);
if (!response.ok)
    {
throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.meals || [];

}catch(error)
{
console.error("Error fetching meals:", error);

        // 🔥 حتى لو error → رجع empty list
        return [];
}
}


export async function getMealsDetialsByName(name)
{
try
{
const response = await fetch(`${APIEndPoints.baseAPi}search.php?s=${name}`);
if (!response.ok)
    {
throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.meals || null;
}catch(error)
{
console.error("Error fetching meals:", error);
        return null;
}
}