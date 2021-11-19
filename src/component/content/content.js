import React, {useState, useEffect} from "react";
import styled from "styled-components"

import movieData, {IMAGE_URL} from "./movieData"

import MovieObject from "./movie";
import Wishlisted from "./wishlisted";

const Main = styled.div`
  color: black;
  padding: 15px;
  margin-left: 10%;
  margin-right: 10%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const WishlistButton = styled.button `
  background-color: white;
  padding: 10px 13px;
  bottom: 87%;
  right: 5%;
  position: fixed;
  font-size: 15px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 2px solid #CED0DB;
  border-radius: 10px;
  :hover {
    font-weight: bold;
    font-size: 17px
  }
`;

const ListButton = styled.button`
  background-color: white;
  padding: 10px 13px;
  bottom: 87%;
  right: 7%;
  position: fixed;
  font-size: 15px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 2px solid #CED0DB;
  border-radius: 10px;
  :hover {
    font-weight: bold;
    font-size: 17px
  }
`;

const Pagewishlist = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 12px;
`;

function Content () {
  const[isMovieList, setIsMovieList] = useState(true);
  const[wishlist, setWishlist] = useState([]);

  function alternateList() {
    setIsMovieList((prevIsMovieList => !prevIsMovieList));
  };

  useEffect(() => {
    const WishlistCandidate = localStorage.getItem("wishlist");

    if (WishlistCandidate !== null && WishlistCandidate !== undefined) {
      setWishlist(JSON.parse(WishlistCandidate));
    }

  }, [])

  // localStorage.removeItem("wishlist");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishList(addedMovieTitle) {
    setWishlist((prevWishlist) => {
      let isInWishlist = false;
      for (const wishlistedMovie of prevWishlist) {
        if (addedMovieTitle === wishlistedMovie) {
          isInWishlist = true;
          break
        }
      }
      if (isInWishlist) {
        return prevWishlist;
      } else {
        return prevWishlist.concat(addedMovieTitle);
      }
    })
  }

  function removeFromWishlist(removeMovieTitle) {
    setWishlist((prevWishlist) => {
      return prevWishlist.filter((value, index, arr) => {
        return value !== removeMovieTitle;
      });
    })
  }

  function movieMaker() {
    let movieList = [];
    for (const movie of movieData) {
      movieList.push(<MovieObject title={movie.title} posterPath={`${IMAGE_URL}${movie.poster_path}`} summary={movie.overview} addToWishList={addToWishList} genre={movie.genre}/>)
    }
    return movieList;
  }

  function wishlistObjectMaker() {
    let wishlistObjectList = [];
    for (const movieTitle of wishlist) {
      wishlistObjectList.push(<Wishlisted title={movieTitle} removeFromWishlist={removeFromWishlist}/>);
    }
    return wishlistObjectList;
  }

  if (isMovieList) {
    return (
      <Main>
        <WishlistButton onClick={alternateList}>My wishlist</WishlistButton>
        <ListContainer>
          {movieMaker()}
        </ListContainer>
    </Main>
    );
  } else {
    return (
      <Main>
        <ListButton onClick={alternateList}>Back</ListButton>
        <Pagewishlist>My wishlist♡</Pagewishlist>
        {wishlistObjectMaker()}
      </Main>
    )
  }
}

export default Content;