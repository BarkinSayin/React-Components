import ShapeCard from "../shapeCard/ShapeCard";

const ShapeList = ({ shapeList }) => {
  return (
    <div className="shape-list">
      {shapeList.map((shape) => (
        <ShapeCard key={shape.id} shape={shape} />
      ))}
    </div>
  );
};

export default ShapeList;
