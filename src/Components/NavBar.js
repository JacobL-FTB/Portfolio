import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div id="navbar">
      <b id="navbarlink">
        <Link to="/">Home</Link>
      </b>
      |
      <b id="navbarlink">
        <Link to="/Projects">Projects</Link>
      </b>
      |
      <b id="navbarlink">
        <Link to="/About">About</Link>
      </b>
    </div>
  );
};
export default NavBar;
