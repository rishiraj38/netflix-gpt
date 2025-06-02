import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();
    const getTopRated = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=2",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
      getTopRated();
    }, []);
}
export default useTopRatedMovies