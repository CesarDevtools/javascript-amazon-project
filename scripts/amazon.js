// --- IMPORTACIONES ---
// Importa el carrito y la función para añadir al carrito.
import {cart, addToCart} from '../data/cart.js';
// Importa la lista de productos.
import {products} from '../data/products.js';
// Importa la función para cambiar el formato del precio.
import {formatCurrency} from './utils/money.js';

// --- GENERACIÓN DEL HTML DE LOS PRODUCTOS ---
// Variable para almacenar el HTML de la cuadrícula de productos.
let productsHTML = '';

// Itera sobre cada producto para generar su HTML.
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// --- RENDERIZADO Y MANEJO DE EVENTOS ---
// Inserta el HTML generado en la cuadrícula de productos de la página.
document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Función para actualizar la cantidad total de artículos en el carrito que se muestra en el encabezado.
function updateCartQuantity() {
  // Calcula la cantidad total de artículos sumando las cantidades de cada item en el carrito.
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  // Actualiza el texto del contador del carrito en el HTML.
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

// Añade un event listener a todos los botones "Add to Cart".
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      // Obtiene el ID del producto desde el atributo data-product-id del botón.
      const productId = button.dataset.productId;
      
      // Llama a la función para añadir el producto al carrito.
      addToCart(productId);
      
      // Actualiza la cantidad de artículos en el carrito que se muestra en el encabezado.
      updateCartQuantity();
    });
  });