import { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./popular.css";
import { Link } from "react-router-dom";

const Vegetarian = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie()
  }, [])

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if(check) {
      setVeggie(JSON.parse(check))
    } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e8f2bb0a045747d9b734581e97a1f694&number=5&tag=vegetarian`);
    const data = await api.json();

    localStorage.setItem('veggie', JSON.stringify(data.recipes))
    setVeggie(data.recipes)
    console.log(data.recipes)
    }
  }
  
  return (
    <div>
      <p className="title-heading">Our Vegetarian Menu</p>
      <Splide options={{
        perPage: 4,
        arrows: false,
        drag: 'free',
      }}>
        {veggie?.map((recipe) => {
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
  )
}

export default Vegetarian
