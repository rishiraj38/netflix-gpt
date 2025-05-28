import React from "react";
import Body from "./components/Body";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Analytics />
      <Body />
    </>
  );
}

export default App;
