import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Strona główna</Link>
                </li>
                <li className={classes.nav_dropdown}>
                    <p>Reklamy</p>
                    <ul className={classes['nav_dropdown-content']}>
                        <li>
                            <Link to="/reklamy/bots">Botów</Link>
                        </li>
                        <li>
                            <Link to="/reklamy/sites">Stron</Link>
                        </li>
                        <li>
                            <Link to="/reklamy/servers">Serwerów</Link>
                        </li>
                        <li>
                            <Link to="/reklamy/banners">Bannery</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/about">O Nas</Link>
                </li>
            </ul>
            <Link to="/sites/idk">
                <h1 className={classes.nav_logo} data-text="K.TK">
                    K.TK
                </h1>
            </Link>
        </nav>
    );
};
