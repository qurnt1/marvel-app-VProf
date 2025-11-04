import { NavLink, Outlet } from "react-router";
import { version } from '../package.json';

/**
 * Layout component for the application
 * @returns {JSX.Element}
 */
const Layout = () => {
    return (
        <>
            {/* Header with navigation links */}
            <header>
                <h1>Marvel App</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>-
                    <NavLink to="/about">About</NavLink>-
                    <NavLink to="/contact">Contact</NavLink>-
                </nav>
            </header>
            {/* Main content area */}
            <main>
                <Outlet />
            </main>
            
            <footer>
                <p>Marvel App - { version } </p>
            </footer>
        </>
    );
};

export default Layout;