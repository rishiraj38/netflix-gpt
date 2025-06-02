import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{

    const dispatch = useDispatch();
    const getUpcoming = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=3",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
    useEffect(() => {
      getUpcoming();
    }, []);
}
export default useUpcomingMovies;