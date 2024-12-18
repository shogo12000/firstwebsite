import { Outlet, NavLink } from "react-router-dom";
import { UserToken } from "../ContextToken";

function Menu() {
  const { token, setToken } = UserToken();

  const logoutUser = () => {
    setToken(null);
  };

  console.log(token);
  return (
    <>
      <aside className="menu">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
              >
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link1"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
              >
                <i className="fa-solid fa-link"></i>
                <p>Link1</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link2"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
              >
                <i className="fa-solid fa-link"></i>
                <p>Link2</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link3"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
              >
                <i className="fa-solid fa-link"></i>
                <p>Link3</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link4"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
              >
                <i className="fa-solid fa-link"></i>
                <p>Link4</p>
              </NavLink>
            </li>
            {!token && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "notActiveLink"
                  }
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <p>Login</p>
                </NavLink>
              </li>
            )}
            {token && (
              <>
                <li>
                  <NavLink
                    to="/member1"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "notActiveLink"
                    }
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p>member1</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/member2"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "notActiveLink"
                    }
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p>member2</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/member3"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "notActiveLink"
                    }
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p>member3</p>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav className="navBottom">
          <ul>
            {token && (
              <li>
                <NavLink to="/" className="logout" onClick={() => logoutUser()}>
                  <i className="fa-solid fa-address-book"></i>
                  <p>Logout</p>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "notActiveLink"
                }
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
