const Header = ({ title, navElements }) => {
  return (
    <header>
      <div className="logo">
        <h1>{title}</h1>
      </div>
      <div className="navElements">
        <ul>
          {navElements.map((element) => (
            <li key={element}>
              <a href="#">{element}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
