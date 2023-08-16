import { Footer } from "../Footer";
import Nav from "../Navigation/Nav";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
