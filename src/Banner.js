import React, { useState, useEffect } from "react";
import instance from "./axios";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);
  const image = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(
    `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
    "imaaaaaaage"
  );
  return (
    <header
      className="banner"
      style={{
        height: "90vh",
        backgroundSize: "cover",
        backgroundImgae: `url(${image})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
