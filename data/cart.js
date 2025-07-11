// --- GESTIÓN DEL CARRITO ---

// Exporta y carga el carrito desde el localStorage del navegador.
// JSON.parse convierte el string guardado de nuevo a un objeto/array de JavaScript.
export let cart = JSON.parse(localStorage.getItem('cart'));

// Si el carrito no existe en localStorage (es la primera visita o se borraron los datos),
// se crea un carrito por defecto con dos productos.
if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

// Función para guardar el estado actual del carrito en el localStorage.
// JSON.stringify convierte el array del carrito a un string para poder guardarlo.
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para añadir un producto al carrito.
export function addToCart(productId) {
  let matchingItem;

  // Busca si el producto ya existe en el carrito.
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Si el producto ya existe, incrementa su cantidad.
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    // Si es un producto nuevo, lo añade al carrito con cantidad 1.
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  // Guarda los cambios en el localStorage.
  saveToStorage();
}

// Función para eliminar un producto del carrito.
export function removeFromCart(productId) {
  // Crea un nuevo array para almacenar los productos que no se van a eliminar.
  const newCart = [];

  // Recorre los items del carrito actual.
  cart.forEach((cartItem) => {
    // Si el producto no es el que se quiere eliminar, se añade al nuevo carrito.
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  // Actualiza el carrito con los productos que no fueron eliminados.
  cart = newCart;

  // Guarda los cambios en el localStorage.
  saveToStorage();
}