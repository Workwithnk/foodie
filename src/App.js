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

                  <ul>
                    <li>{data.strIngredient1}</li>
                    <li>{data.strIngredient2}</li>
                    <li>{data.strIngredient3}</li>
                    <li>{data.strIngredient4}</li>
                    <li>{data.strIngredient5}</li>
                    <li>{data.strIngredient6}</li>
                    <li>{data.strIngredient7}</li>
                    <li>{data.strIngredient8}</li>
                    <li>{data.strIngredient9}</li>
                    <li>{data.strIngredient10}</li>
                    <li>{data.strIngredient11}</li>
                    <li>{data.strIngredient12}</li>
                    <li>{data.strIngredient13}</li>
                    <li>{data.strIngredient14}</li>
                    <li>{data.strIngredient15}</li>
                    <li>{data.strIngredient16}</li>
                    <li>{data.strIngredient17}</li>
                    <li>{data.strIngredient18}</li>
                    <li>{data.strIngredient19}</li>
                    <li>{data.strIngredient20}</li>
                  </ul>

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
