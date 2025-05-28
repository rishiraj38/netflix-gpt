import React from "react";
import Body from "./components/Body";
import { inject } from "@vercel/analytics";
inject();
function App() {
  return (
    <>
      <Body />
    </>
  );
}

export default App;
