import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-column">
            <img
              className="logo"
              src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
              alt=""
            />
            <span className="footer-address">
              Av. Bolivia 148, Stand interior 3050 Galería Centro Lima
            </span>
          </div>
          <div className="footer-column">
            <h3>Nuestro Telefono</h3>
            <span>+51 986 443 783</span>
          </div>
          <div className="footer-column">
            <h3>Nuestro Correo</h3>
            <span>ventas@coneygraf.com</span>
          </div>
          <div className="footer-column">
            <h3>Contenido</h3>
            <ul>
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Nosotros</a>
              </li>
              <li>
                <a href="">Servicios</a>
              </li>
              <li>
                <a href="">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
