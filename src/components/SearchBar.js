import React, { useRef, useState } from "react"
import styled from "styled-components"
import magnified from "../images/magnifying.svg"

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 17rem;
  margin: 15px auto;
`

const SearchInput = styled.input`
  height: 36px;
  border: none;
  border-radius: 20px 0 0 20px;
  padding-left: 10px;
  width: 17rem;
`

const Magnified = styled.img`
  height: 1rem;
  margin: auto 0;
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  cursor: text;
`

const AddButton = styled.button`
  border: 2px solid #000;
  border-left: 1px solid #000;
  border-radius: 0 20px 20px 0;
  height: 36.3px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  width: 2rem;
  padding-bottom: 4px;
  padding-right: 9px;
  cursor: pointer;
  color: #fff;
  &:hover {
    border: 1px solid #000;
  }
`

const SearchBar = ({ onAddProject, filterProjects, searchType }) => {
  const [inputValue, setInputValue] = useState()
  const inputRef = useRef()

  const handleKeypress = e => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    onAddProject(inputValue)
    inputRef.current.value = ""
  }

  const handleChange = e => {
    setInputValue(e.target.value)
    filterProjects(e.target.value)
  }
  

  return (
    <SearchContainer>
      <SearchInput
        ref={inputRef}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        type="text"
        minLength="1"
        maxLength="30"
        placeholder={searchType + " name.."}
      />
      <Magnified
        src={magnified}
        alt="magnified"
        onClick={() => inputRef.current.focus()}
      />
      <AddButton onClick={handleSubmit}>+</AddButton>
    </SearchContainer>
  )
}

export default SearchBar
