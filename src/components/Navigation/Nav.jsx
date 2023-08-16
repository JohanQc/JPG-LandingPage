import "./Nav.css";

function Nav() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a href="#">
            <img
              className="logo"
              src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
              alt=""
            />
          </a>
          <ul className="options">
            <li>
              <a href="">INICIO</a>
            </li>
            <li>
              <a href="">NOSOTROS</a>
            </li>
            <li>
              <a href="">SERVICIOS</a>
            </li>
            <li>
              <a href="">PORTAFOLIO</a>
            </li>
            <li>
              <a href="">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
