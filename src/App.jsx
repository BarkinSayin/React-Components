import { useState } from "react";
import "./App.css";

function App() {
  const [shapeList, setShapeList] = useState([]);
  const [shapeForm, setShapeForm] = useState({
    color: "",
    shape: "",
  });
  const createShape = (event) => {
    event.preventDefault();
    setShapeList((prevShapeList) => [
      ...prevShapeList,
      { ...shapeForm, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <header>
        <div className="log">
          <h1>CustomShapes</h1>
        </div>
        <div className="navElements">
          <ul>
            <li>Profile</li>
            <li>Details</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <main>
        <select
          name="color"
          id="color"
          onChange={(event) =>
            setShapeForm((prevShape) => ({
              ...prevShape,
              color: event.target.value,
            }))
          }
        >
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
        <select
          name="shape"
          id="shape"
          onChange={(event) =>
            setShapeForm((prevShape) => ({
              ...prevShape,
              shape: event.target.value,
            }))
          }
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
        </select>
        <button onClick={createShape}>Create Shape</button>
        <div className="shape-list">
          {shapeList.map((shape) => (
            <div className="shape-card" key={shape.id}>
              {(shape.shape === "circle" && (
                <div
                  style={{
                    backgroundColor: shape.color,
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    margin: "5px",
                  }}
                ></div>
              )) ||
                (shape.shape === "square" && (
                  <div
                    style={{
                      backgroundColor: shape.color,
                      height: "50px",
                      width: "50px",
                      margin: "5px",
                    }}
                  ></div>
                )) ||
                (shape.shape === "rectangle" && (
                  <div
                    style={{
                      backgroundColor: shape.color,
                      height: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  ></div>
                ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
