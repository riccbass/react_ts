import React, { useState } from "react";

import relogio from "../images/relogio.webp";
import camera from "../images/camera.jpg";
import imagemDefault from "../images/image_default.webp";

const Product = ({ product, onAddToCart }) => {
  //   let importedImage = import("../images/relogio.webp");

  const [quantity, setQuantity] = useState(1);

  let importedImage;

  switch (product.id) {
    case 1:
      importedImage = relogio;
      break;
    case 2:
      importedImage = camera;
      break;
    default:
      importedImage = imagemDefault;
      break;
  }

  return (
    <div className="product">
      <img src={importedImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <div className="cart-buttons">
        <select onChange={(e) => setQuantity(parseInt(e.target.value))}>
          {[...Array(10).keys()].map((x) => (
            <option key={x} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
