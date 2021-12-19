import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All');

  function handleAddClick(e) {
    const getNewFood = getNewSpicyFood();
    const newFoodArray = [...foods, getNewFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(clickedId) {
    const newFoodArray = foods.map((food) => {
      if (food.id === clickedId) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray)
  }; 

  function handleCausineChange(e) {
    setFilterBy(e.target.value)
  };

  const filteredArray = foods.filter((food) => {
    if (filterBy === 'All') {
      return true;
    } else {
      return (food.cuisine === filterBy);
    }
  });

  const foodToDisplay = filteredArray.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | {food.heatLevel} | {food.cuisine}
    </li>
  ))

  return (
    <div>
      <select name="filter" onChange={handleCausineChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={handleAddClick}>Add New Food</button>
      <ul>{foodToDisplay}</ul>
    </div>
  );
}

export default SpicyFoodList;
