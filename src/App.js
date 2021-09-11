import dotenv from "dotenv";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import "./CSS/App.css";

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${URL}`);
    const data = await res.json();
    setData(data.meals);
  };
  const NextRecipe = () => {
    window.location.reload();
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {data ? (
        <div>
          {data.map((data) => {
            return (
              <div className="App_Data" key={data.idMeal}>
                <img src={data.strMealThumb} alt="Item photo" />
                <h1>{data.strMeal}</h1>
                <div className="App_AllDetails">
                  <label>Ingredient :</label>
                  <span>
                    {data.strIngredient1},{data.strIngredient2},
                    {data.strIngredient3},{data.strIngredient4},
                    {data.strIngredient5},{data.strIngredient6},
                    {data.strIngredient7},{data.strIngredient8},
                    {data.strIngredient9},{data.strIngredient10},
                    {data.strIngredient11},{data.strIngredient12},
                    {data.strIngredient13},{data.strIngredient14},
                    {data.strIngredient15},{data.strIngredient16},
                    {data.strIngredient17},{data.strIngredient18},
                    {data.strIngredient19},{data.strIngredient20},
                  </span>
                  <label>Instructions : </label>
                  <span> {data.strInstructions} </span>
                  {`${data.strYoutube}` ? (
                    <a href={data.strYoutube}> Watch </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
      <div className="App_NextRecipe">
        <button onClick={NextRecipe}>next recipe </button>
      </div>
    </div>
  );
}

export default App;
