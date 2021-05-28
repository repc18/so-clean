import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
const MainHeader = () => {
    return (
        <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>So Clean</div>
      </Link>
        <nav>
            <ul>
                <li>
                <Link to='/Login'>Log in</Link>
                </li>
                <li>
                <Link to='/SignUp'>Sign Up</Link>
                </li>
                <li>
                <Link to='/Book'>Book</Link>
                </li>
            </ul>
        </nav>
        
              <button>Logout</button>
            
    </header>
    );
};

export default MainHeader;