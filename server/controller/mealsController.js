import axios from 'axios';

// The Api sent back the ingredients as seperate fields so i wrote this function to return the ingredients as an array
const getIngredients = (meal) => {
    let ingredients = [];
    for(let i=1; i<21; i++){
        let strIngredient = meal[`strIngredient${i}`];
        ingredients = strIngredient ? [...ingredients, strIngredient] : ingredients;
    }
    return ingredients;
}

// Used a try catch in this function to catch any error that may arise if there is no valid meal Id in the array
// Also returns a message if there are two meals tied for least ingredients
const leastIngredients = async (req, res) => {
    const { mealIds } = req.body;
    if(!mealIds.length){
        return res.status(400).send({ message: "No meal id's specified"});
    }
    try{
        const meals = await Promise.all(mealIds.map(id => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(resp => resp.data.meals[0])));
        const mealObjects = meals.map((meal, i) => {
            let mealIngredients = getIngredients(meal);
            return { index: i , ingredientNo : mealIngredients.length, ingredients: mealIngredients, meal: meal.strMeal, id: meal.idMeal};
        });
        const sortedMeals = mealObjects.sort((a,b) => a.ingredientNo - b.ingredientNo);
        const mealWithLeastIngredientsIndex =  sortedMeals[0].index;
        const { ingredients, ingredientNo, id, meal } = mealObjects[mealWithLeastIngredientsIndex];
        const tiedMeals = sortedMeals[0].ingredientNo === sortedMeals[1].ingredientNo && sortedMeals[0].meal !== sortedMeals[1].meal;
        const message = tiedMeals ? `This meal is tied with the ${sortedMeals[1].meal} meal with the id of ${sortedMeals[1].id} for the lowest ingredients required`: "This meal is the clear winner";
        return res.status(200).send({ id, meal, ingredients, ingredientNo, message });
    } catch (err) {
        return res.status(400).send({ message: 'You might have entered an invalid meal id, please double check' });
    }
};

export default { leastIngredients };