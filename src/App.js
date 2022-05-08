import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import data from "./data";

function App() {
  const point = data.map((item) => {
    return <Content key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {point}
    </div>
  );
}

export default App;
