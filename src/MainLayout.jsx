import "./MainLayout.css";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import Link4 from "./pages/Link4";
import Login from "./pages/Login";
import Member1 from "./pages/Member1";
import Member2 from "./pages/Member2";
import Member3 from "./pages/Member3";
import Contact from "./pages/Contact";
import { UserTokenProvider, UserToken } from "./ContextToken";

function MainLayout() {
  const { token, setToken } = UserToken();
  return (
    <>
      <div className="layout">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<HomePage />} />
              <Route path="link1" element={<Link1 />} />
              <Route path="link2" element={<Link2 />} />
              <Route path="link3" element={<Link3 />} />
              <Route path="link4" element={<Link4 />} />
              {token ? (
                <>
                  <Route path="Login" element={<HomePage />} />
                  <Route path="member1" element={<Member1 />} />
                  <Route path="member2" element={<Member2 />} />
                  <Route path="member3" element={<Member3 />} />
                </>
              ) : (
                <>
                  <Route path="Login" element={<Login />} /> 
                </>
              )}
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainLayout;
