import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { useHistory}from "react-router-dom";

import useToken from '../Pages/useToken';
import useName from '../Pages/useName';
import useId from '../Pages/useId';
import usePhone from '../Pages/usePhone';
import useEmail from '../Pages/useEmail';


const SecondHeader = () => {
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

    const routeChange2 = () =>{ 
      let path = `chooseRoom`; 
      history.push(path);
    }
  
    function confirm2() {
      sessionStorage.removeItem("roomData")
      sessionStorage.removeItem("workerIds")
      routeChange2();
    }

    return (
        <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>So Clean</div>
      </Link>
        <nav>
            <ul>
                <li>
                <Link onClick={confirm2}
                
                >Create New Order</Link>
                </li>
            </ul>
        </nav>
        
        <Link onClick={() => {
                  logout();
                  window.location.reload(false)}
                }
                
                >
                  Log out
                </Link>
            
    </header>
    );
};

export default SecondHeader;