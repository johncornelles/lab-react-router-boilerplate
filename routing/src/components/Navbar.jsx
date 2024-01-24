import { Link } from 'react-router-dom';
import './../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
        <Link to="/">
          <h1>Kalvium ❤️</h1>
        </Link>
      </div>
      <div className='pages'>
        <div>
          <Link to="/contacts" className="nav-link">
            <h1>Contacts</h1>
          </Link>
        </div>
        <div>
          <Link to="/about" className="nav-link">
            <h1>About</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;