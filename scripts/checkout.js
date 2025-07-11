// --- IMPORTACIONES ---
// Importa el carrito y la función para eliminar del carrito desde cart.js.
import {cart, removeFromCart} from '../data/cart.js';
// Importa la lista de productos.
import {products} from '../data/products.js';
// Importa la función para formatear el precio.
import {formatCurrency} from './utils/money.js';

// --- GENERACIÓN DEL HTML DEL RESUMEN DEL CARRITO ---
// Variable para almacenar el HTML de los productos en el carrito.
let cartSummaryHTML = '';

// Itera sobre cada artículo en el carrito para generar su HTML.
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  // Busca el producto completo en la lista de productos usando el productId del carrito.
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  // Añade el HTML del artículo del carrito a la variable cartSummaryHTML.
  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// --- RENDERIZADO Y MANEJO DE EVENTOS ---
// Inserta el HTML generado en el contenedor del resumen del pedido en la página.
document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

// Añade un event listener a todos los enlaces de "Delete".
document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      // Obtiene el ID del producto desde el atributo data-product-id.
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
    });
  });