import propTypes from "prop-types";

const Circle = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "50px",
        width: "50px",
        borderRadius: "50px",
        margin: "5px",
      }}
    ></div>
  );
};

Circle.propTypes = {
  color: propTypes.string,
};

export default Circle;
