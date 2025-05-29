import React from "react";
import Body from "./components/Body";
import { inject } from "@vercel/analytics";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
inject();
function App() {
  return (
    <Provider store = {appStore}>
      <Body />
    </Provider>
  );
}

export default App;
