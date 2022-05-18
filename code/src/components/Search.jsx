import React from "react";
import styled from "styled-components";

const Search = ({ getMostLiked, setSearchName, findName }) => {
  const searchName = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <StyledBar>
      <input type="text" onChange={searchName} />
      <button onClick={() => findName()}>Search for name</button>
      <button onClick={() => getMostLiked()}>Get Most Liked</button>
    </StyledBar>
  );
};

export default Search;

const StyledBar = styled.div`
  width: 100%;
  margin: 15px auto;
  border: 1px solid white;
  box-shadow: 2px 4px white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
`;
