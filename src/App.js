import React from "react";

function Food(props) {
  return <h3>I like {props.fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chicken" />
    </div>
  );
}

export default App;
