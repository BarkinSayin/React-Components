import Circle from "../shapes/Circle";
import Rectangle from "../shapes/Rectangle";
import Square from "../shapes/Square";

const ShapeCard = ({ shape }) => {
  return (
    <div className="shape-card">
      {(shape.shape === "circle" && <Circle color={shape.color} />) ||
        (shape.shape === "square" && <Square color={shape.color} />) ||
        (shape.shape === "rectangle" && <Rectangle color={shape.color} />)}
    </div>
  );
};

export default ShapeCard;
