import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { useHistory}from "react-router-dom";

import useToken from '../Pages/useToken';
import useName from '../Pages/useName';
import useId from '../Pages/useId';
import usePhone from '../Pages/usePhone';
import useEmail from '../Pages/useEmail';


const MainHeader = () => {
  const { token, setToken } = useToken();
  const { name, setName } = useName();
  const { customerId, setId } = useId();
  const { phone, setPhone } = usePhone();
  const { email, setEmail } = useEmail();


  const history = useHistory();

    const routeChange = () =>{ 
      let path = `Logout`; 
      history.push(path);
    }

    function logout() {
      sessionStorage.clear();
      routeChange();
    }

    return (
        <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>So Clean</div>
      </Link>
        <nav>
            <ul>
                <li>
                
                <Link 
                onClick={() => {
                history.push(`Login`)}}
                >
                  Log in
                </Link>
                </li>
                <li>
                <Link to='/SignUp'>Sign Up</Link>
                </li>
            </ul>
        </nav>
            
    </header>
    );
};

export default MainHeader;