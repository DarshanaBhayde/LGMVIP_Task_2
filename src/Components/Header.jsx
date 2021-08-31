import { Link } from 'react-router-dom';
import '../styles/defaults.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='brand'>
          LetsGrowMore
        </Link>
        <nav>
          <Link to='/users'>Get users</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;