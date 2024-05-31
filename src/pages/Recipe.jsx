import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const getRecipeInfo = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=e8f2bb0a045747d9b734581e97a1f694`
    );
    const recipe = await data.json();
    setRecipeDetail(recipe);
    console.log(recipe);
  };

  useEffect(() => {
    getRecipeInfo();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div className="left">
        <h2>{recipeDetail.title}</h2>
        <img src={recipeDetail.image} alt={recipeDetail.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}></p>
            <p
              dangerouslySetInnerHTML={{ __html: recipeDetail.instructions }}
            ></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipeDetail.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: #111111;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin: 15px 0;
  }

  .li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: bold;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
