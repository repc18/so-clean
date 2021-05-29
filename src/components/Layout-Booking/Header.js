import { Link } from 'react-router-dom';
import classes from "../Layout/MainHeader.module.css";
const MainHeader = () => {
    return (
        <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>So Clean</div>
      </Link>
        <nav>
            
        </nav>
        
              <button>Logout</button>
            
    </header>
    );
};

export default MainHeader;