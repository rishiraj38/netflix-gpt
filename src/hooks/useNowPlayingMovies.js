import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = (onError) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    let didTimeout = false;

    const timeoutId = setTimeout(() => {
      didTimeout = true;
      if (onError) onError(); // Alert user to turn on VPN
    }, 1000);

    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      clearTimeout(timeoutId); 
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();
      if (!didTimeout) dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      clearTimeout(timeoutId); 
      console.error("Error fetching now playing movies:", error);
      if (!didTimeout && onError) onError(); 
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
