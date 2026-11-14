const order = document.getElementById('order-form');
const quantityOutput = document.getElementById('quantity');
const totalOutput = document.getElementById('total');
const barPrice = document.getElementById('bar-price');
const orderStatus = document.getElementById('order-status');
const unitPrice = 400;
let quantity = 1;

function changeQuantity(delta) {
  quantity = Math.max(1, quantity + delta);
  quantityOutput.value = quantity;
  const amount = quantity * unitPrice + ' جنيه';
  totalOutput.textContent = amount;
  barPrice.textContent = amount;
}

document.getElementById('plus').addEventListener('click', () => changeQuantity(1));
document.getElementById('minus').addEventListener('click', () => changeQuantity(-1));
order.addEventListener('submit', event => {
  event.preventDefault();
  orderStatus.textContent = 'دي معاينة للتصميم. الطلب ما اتبعتش.';
  orderStatus.hidden = false;
});