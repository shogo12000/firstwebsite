import "./MainLayout.css";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import Link4 from "./pages/Link4";
import Login from "./pages/Login";
import Contact from "./pages/Contact"

function MainLayout() {
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
              <Route path="Login" element={<Login />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainLayout;
