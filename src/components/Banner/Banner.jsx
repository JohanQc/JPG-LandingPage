import "./Banner.css";

function Banner() {
  return (
    <main className="main">
      <img
        className="main-img"
        src="https://i.ytimg.com/vi/KhiRN_0sXyY/maxresdefault.jpg"
        alt=""
      />
      <div className="content">
        <h1 className="title">Impresiones en Gran Formato</h1>
        <span>
          Dale vida a tus ideas y proyectos con gigantografías, vinilos y
          banners impresionantes
        </span>
        <button className="button"><a href="#">COTIZA TU CHAMBA</a></button>
      </div>
    </main>
  );
}

export default Banner;
