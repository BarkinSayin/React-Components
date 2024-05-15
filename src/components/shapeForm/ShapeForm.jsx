import { useState } from "react";

export const ShapeForm = ({ getShape }) => {
  const [shapeForm, setShapeForm] = useState({
    color: "",
    shape: "",
  });
  const createShape = (event) => {
    event.preventDefault();
    getShape(shapeForm);
  };
  return (
    <div className="shape-form">
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
    </div>
  );
};
export default ShapeForm;
