function foodRecipe(){
    const foodRef=document.querySelector("#recipe");
    const foodValue=foodRef.value;
    const recipeDevRef=document.querySelector("#recipediv");
    const foodRecipe=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodValue}`);
     foodRecipe
.then((data)=>{
    return data.json();
})
.then((data)=>{
    const recipeDevRef=document.querySelector("#recipediv");
    const meals=data.meals;
    console.log(meals);
meals.map((ml)=>{recipeDevRef.innerHTML=recipeDevRef.innerHTML+`<div>
<img src="${ml.strMealThumb}"width="100"height="100"/>
<h2>${ml.strMeal}</h2>
<a href="${ml.strYoutube}"target="_blank">Youtube Video</a>
</div>`;});
})
.catch((error)=>{
    recipeDevRef.innerHTML="Unable to find recipe";
});
}
