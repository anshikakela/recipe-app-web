import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  let name = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8f2bb0a045747d9b734581e97a1f694&query=${name}`
    );
    const recipes = await data.json();
    setSearchedResults(recipes.results);
  };

  useEffect(() => {
    getSearched(name.search);
  }, [name.search]);

  return (
    <div>
      <h2>Search Results....</h2>
      <Grid>
        {searchedResults.map((item) => (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </Link>
            </Card>
        ))}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  p {
    text-align: left;
    font-weight: 500;
    padding: 1rem;
  }
`;

export default Searched;
