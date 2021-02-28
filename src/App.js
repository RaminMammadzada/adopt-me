import React from "react";
import render from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return (
  //   <div>
  //     <h1>Adopt Me!</h1>
  //     <Pet name="Luna" animal="dog" breed="Havanese" />
  //     <Pet name="Pepper" animal="bird" breed="Cockatiel" />
  //     <Pet name="Doink" animal="cat" breed="Mix" />
  //   </div>
  // );

  return (
    <div>
      
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Coctaliel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  )

};

render.render(<App />, document.getElementById("root"));
