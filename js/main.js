document.querySelector('button').addEventListener('click', searchDB)

function searchDB() {
    const ingredient = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(response => response.json())
    .then(data => {
        pickDrink(data)
    }) 
    .catch(err => {
        console.log(err)
    })
}


function pickDrink(obj) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj.drinks[Math.floor(Math.random()*obj.drinks.length)].idDrink}`)
    .then(res => res.json())
    .then(data => {
        updateDom(data)
    })
    .catch(err => console.log(err))
}


function updateDom(obj) {
    
    const drink = obj.drinks[0]
    console.log(drink)
    const ingredientsArr = [drink.strIngredient1,
                            drink.strIngredient2, 
                            drink.strIngredient3, 
                            drink.strIngredient4,
                            drink.strIngredient5, 
                            drink.strIngredient6, 
                            drink.strIngredient7, 
                            drink.strIngredient8, 
                            drink.strIngredient9, 
                            drink.strIngredient10, 
                            drink.strIngredient11, 
                            drink.strIngredient12, 
                            drink.strIngredient13, 
                            drink.strIngredient14, 
                            drink.strIngredient15]

    document.querySelector('#drinkTitle').innerText = drink.strDrink
    document.querySelector('img').src = drink.strDrinkThumb
    document.querySelector('#categoryAndGlass').innerText = `${drink.strCategory} | ${drink.strGlass}`
    
    
    for (let i = 0; i <= ingredientsArr.length; i++) {
        document.querySelector(`#ingredient${i+1}`).innerText = ''
        if (ingredientsArr[i]) {
            document.querySelector(`#ingredient${i+1}`).innerText = `${drink[`strMeasure${i+1}`]} ${ingredientsArr[i]}`
        }
    }

}