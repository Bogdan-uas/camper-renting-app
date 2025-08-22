import css from "./Header.module.css";
import TravelTrucks from '../../assets/icons/TravelTrucks/TravelTrucks.svg?react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={css.header}>
            <Link to="/">
                <TravelTrucks className={css.logo} />
            </Link>
            <nav className={css.nav}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link}>
                    Home
                </NavLink>
                <NavLink to="/catalog" className={({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link}>
                    Catalog
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;