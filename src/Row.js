import React from "react";
import instance from "./axios";
import { useState, useEffect } from "react";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              className="row__poster"
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
