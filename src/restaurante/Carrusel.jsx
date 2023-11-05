import sandwich from "../assets/sandwich.jpg";
import hamburguesa from "../assets/hamburguesa.jpg";
import cafe from "../assets/cafe.jpg";

function Carrusel() {
  return (
    <>
      <br />
      <h2 className="text-center">Productos destacados</h2>

      {/*carrusel de productos (debe ser un componente)*/}
      <div className="container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cafe} className="d-block w-100" alt="primer imagen" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Primer producto</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={hamburguesa}
                className="d-block w-100"
                alt="segunda imagen"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Segundo Producto</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={sandwich}
                className="d-block w-100"
                alt="tercer imagen"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tercer Producto</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
