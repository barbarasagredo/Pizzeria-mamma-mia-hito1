import "./cardPizza.css";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <>
      <div class="col-12 col-sm-6 col-lg-3 col-xl-3 mb-4">
        <div className="card-pizza">
          <div>
            <img
              className="avatar"
              src={img}
              alt={name}
              width="100%"
              height="40%"
            />
          </div>
          <div className="card-title italian-font">
            <h3>Pizza {name}</h3>
          </div>
          <div className="card-ingredients">
            <h6>Ingredientes:</h6>
            <div className="ingredient-list">
              <i class="fas fa-pizza-slice me-1"></i>
              <span>{ingredients.join(", ")}</span>
            </div>
          </div>
          <div className="card-footer">
            <h4>Precio: ${price.toLocaleString()}</h4>
            <div className="card-buttons">
              <button type="button" class="btn btn-outline-secondary">
                Ver más
              </button>
              <button type="button" class="btn btn-dark">
                Añadir
                <i class="fas fa-shopping-cart ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPizza;
