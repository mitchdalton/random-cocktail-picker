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
    document.querySelector('#drinkTitle').innerText = drink.strDrink
    document.querySelector('img').src = drink.strDrinkThumb
    document.querySelector('#categoryAndGlass').innerText = `${drink.strCategory} | ${drink.strGlass}`
    
    
    document.querySelector('#ingredient1').innerText = drink.strIngredient1
    document.querySelector('#ingredient2').innerText = drink.strIngredient2
    document.querySelector('#ingredient3').innerText = drink.strIngredient3
    document.querySelector('#ingredient4').innerText = drink.strIngredient4
    document.querySelector('#ingredient5').innerText = drink.strIngredient5
    document.querySelector('#ingredient6').innerText = drink.strIngredient6
    document.querySelector('#ingredient7').innerText = drink.strIngredient7
    document.querySelector('#ingredient8').innerText = drink.strIngredient8
    document.querySelector('#ingredient9').innerText = drink.strIngredient9
    document.querySelector('#ingredient10').innerText = drink.strIngredient10
    document.querySelector('#ingredient11').innerText = drink.strIngredient11
    document.querySelector('#ingredient12').innerText = drink.strIngredient12
    document.querySelector('#ingredient13').innerText = drink.strIngredient13
    document.querySelector('#ingredient14').innerText = drink.strIngredient14
    document.querySelector('#ingredient15').innerText = drink.strIngredient15

}