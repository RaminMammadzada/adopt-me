import React, { useState } from "react";
import render from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {

  const themeHook = useState({
    buttonColor: "darkBlue",
    modalColor: "pink"
  });  

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">
            Adopt Me!
          </Link>
        </header>
        <Router>
          <SearchParams path="/"/>
          <Details path="/details/:id"/>
        </Router>
      </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )

};

render.render(<App />, document.getElementById("root"));
