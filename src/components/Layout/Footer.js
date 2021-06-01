import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className={classes.footer}>
        <nav>
            <ul>
                <li>
                <Link to='/FAQ'>
                    FAQ
                </Link>
                </li>
                <li>
                <Link to='/AboutUs'>
                    About Us
                </Link>
                </li>
                <li>
                <Link to='/ContactUs'>
                    Contact Us
                </Link>
                </li>
            </ul>
        </nav>
    </footer>
    );
};

export default Footer;