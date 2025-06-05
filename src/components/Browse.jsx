import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const [errorOccurred, setErrorOccurred] = useState(false);

  const handleError = () => {
    if (!errorOccurred) {
      alert(
        "Failed to load movies. Please turn on your VPN and try again. Sorry for the inconvenience."
      );
      setErrorOccurred(true);
    }
  };

  useNowPlayingMovies(handleError);
  usePopularMovies(handleError);
  useTopRatedMovies(handleError);
  useUpcomingMovies(handleError);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
