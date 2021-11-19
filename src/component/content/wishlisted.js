import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  margin-right: 20%;
`;

const Title = styled.p`
  margin-right: 50px;
`;

const DeleteButton = styled.button`
  background-color: white;
  margin: 10px;
  padding: 8px 12px;
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 2px solid #CED0DB;
  border-radius: 10px;
`;

function Wishlisted(props) {
  return(
      <Main>
        <DeleteButton onClick={() => {props.removeFromWishlist(props.title)}}>Remove</DeleteButton>
        <Title>{props.title}</Title>
      </Main>
  )
}

export default Wishlisted;