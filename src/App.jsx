import { useState } from "react";
import "./App.css";
import ShapeList from "./components/shapeList/ShapeList";
import ShapeForm from "./components/shapeForm/ShapeForm";
import Header from "./components/shared/header/Header";

function App() {
  const [shapeList, setShapeList] = useState([]);

  const getShape = (newShape) => {
    setShapeList((prevShapeList) => [
      ...prevShapeList,
      { ...newShape, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <Header
        title={"Mahmut"}
        navElements={["Profile", "Details", "Contact"]}
      />
      <main>
        <ShapeForm getShape={getShape} />
        <ShapeList shapeList={shapeList} />
      </main>
    </>
  );
}

export default App;
