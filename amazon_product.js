const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const quantityInput = document.getElementById('quantity');

function getQuantity() {
  const value = parseInt(quantityInput.value, 10);
  return Number.isNaN(value) || value < 1 ? 1 : value;
}

function showMessage(message) {
  alert(message);
}

addToCartBtn.addEventListener('click', () => {
  const quantity = getQuantity();
  showMessage(`${quantity} item${quantity > 1 ? 's' : ''} added to cart.`);
});

buyNowBtn.addEventListener('click', () => {
  const quantity = getQuantity();
  showMessage(`Proceeding to checkout with ${quantity} item${quantity > 1 ? 's' : ''}.`);
});

quantityInput.addEventListener('input', () => {
  if (quantityInput.value === '' || parseInt(quantityInput.value, 10) < 1) {
    quantityInput.value = 1;
  }
});
