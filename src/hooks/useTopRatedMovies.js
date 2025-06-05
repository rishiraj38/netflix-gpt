import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = (onError) => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=2",
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
      if (onError) onError();
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
