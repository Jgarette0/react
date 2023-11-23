import { useState } from "react";

export function Food() {
  let FavouriteFood = [
    "Fried Chicken",
    "Mango Float",
    "Cheese Cake",
    "Crab Meat",
    "Sizzling Pork",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Favourite Foods</h1>
      <ul className="list-group">
        {FavouriteFood.length === 0 && <p>No Favourite Food found..</p>}
        {FavouriteFood.map((FavouriteFood, index) => (
          <li
            key={FavouriteFood}
            className={
              selectedIndex === index
                ? "list-group-item active autofocus"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              console.log(FavouriteFood, index + 1);
            }}
          >
            {FavouriteFood}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Food;
