import { Outlet, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <aside className="menu">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link1"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-link"></i>
                <p>Link1</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link2"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-link"></i>
                <p>Link2</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link3"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-link"></i>
                <p>Link3</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link4"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-link"></i>
                <p>Link4</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-right-to-bracket"></i>
                <p>Login</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="navBottom">
          <ul>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive && "activeLink"}
              >
                <i className="fa-solid fa-address-book"></i>
                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}

export default Menu;
