import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodsArray = [...foods, newFood];
    setFoods(newFoodsArray);
    
  }

  function handleClick(id){
    const newFoodsArray = foods.map((food) => {
      if(food.id === id){
        return {
          ...food, 
          heatLevel: food.heatLevel + 1,
        };
      }else{
        return food;
      }
    })
    
    setFoods(newFoodsArray);
  }

  const [filterBy, filterByState] = useState('All');

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));



  
  
  function handleDifferentRestaurants(){
   
    filterByState(document.querySelector('select').value)
    
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <br></br>
      <select name="filter" onChange={() => {handleDifferentRestaurants()}}>
        <option value='All'>All</option>
        <option value='American'>American</option>
        <option value='Sichuan'>Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
