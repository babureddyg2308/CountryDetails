import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav style={{ backgroundColor: "blue", height: "50px", textAlign: "center", color: 'white',display: 'flex',
  justifyContent: 'space-around' , alignItems:'center'}}>
        <Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link>
        {user ? (
          <>
            <Link to="/favorites" style={{textDecoration:'none', color:'white'}}>Favorites</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{textDecoration:'none', color:'white'}}>Login</Link>
            <Link to="/register" style={{textDecoration:'none', color:'white'}}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header; 