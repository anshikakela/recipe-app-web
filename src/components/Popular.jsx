import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./popular.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if(check) {
      setPopular(JSON.parse(check));
    }
   else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e8f2bb0a045747d9b734581e97a1f694&number=10`);
    const data = await api.json();

    localStorage.setItem('popular', JSON.stringify(data.recipes))
    setPopular(data.recipes)
    console.log(data.recipes)
   }
  };

  return (
    <div>
      <p className="title-heading">Popular Picks</p>
      <Splide options={{
        perPage: 4,
        arrows: false,
        drag: 'free',
      }}>
        {popular?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <div className="card">
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient"></div>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
