import React, {useState} from "react";
import styled from "styled-components";

const Main = styled.div`
  color: black;
  width: 350px;
  text-align: center;
`;

const Poster = styled.img`
  width: 80%;
  border-radius: 15px;
  :hover {
    width: 85%;
  }
`;

const Title = styled.h2`
  font-size: 27px;
  margin-bottom: 3px;
`;

const Genre = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Summary = styled.p`
  font-size: 15px;
  display: ${(props) => {
    if (props.display) {
      return "inline-block";
    } else {
      return "none";
    }
  }};
`;

const AddToWishList = styled.button`
  background-color: white;
  margin: 10px;
  padding: 10px 13px;
  font-size: 14px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 2px solid #CED0DB;
  border-radius: 10px;
  :hover {
    font-weight: bold;
  }
`;

function MovieObject (props){
  const[showSummary, setShowSummary] = useState(false);

  // useEffect (() => {
  //   console
  // })


  function alternateShowSummary() {
    setShowSummary((prevShowSummary) => !prevShowSummary);
  }

  return (
    <Main>
      <Poster onClick={alternateShowSummary} src={`${props.posterPath}`}/>
      <Title>{props.title}</Title>
      <Genre>{props.genre}</Genre>
      <Summary display={showSummary}>{props.summary}</Summary>
      <AddToWishList onClick={() => {props.addToWishList(props.title)}}>Add to wishlist</AddToWishList>
    </Main>
  )
}

export default MovieObject;