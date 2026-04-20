// 📌 مسؤول عن:

// عرض البيانات
// DOM manipulation

// 👉 هذا “تقديم الأكل للزبون”


export function createMealCard(meal)
{
const card = document.createElement("div");
card.classList.add("item","flex");
card.dataset.dataName=meal.name;
card.innerHTML = `
<img src="${meal.img}" alt="${meal.name}" loading="lazy" decoding="async">
        <span class="label">${meal.name}</span>
        <span class="category">${meal.category}</span>
        `;
    return card;
}
