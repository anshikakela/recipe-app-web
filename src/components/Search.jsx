import { useState } from "react"
import styled from "styled-components"
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"


const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/searched/${searchInput}`)
  } 

  return (
    <>
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input type="text" placeholder="Search Dishes" 
                value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </FormStyle>
    </>
  )
}

const FormStyle = styled.form`
    position: relative;

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 400px;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search
