const PRODUCTS = {
  1: {name:'Classic Chicken Pickle', price:450},
  2: {name:'Spicy Mountain Pickle', price:520},
  3: {name:'Mango-Chili Chicken Pickle', price:500}
};

function openOrder(id){
  const modal = document.getElementById('orderModal');
  document.getElementById('productId').value = id;
  document.getElementById('modalTitle').textContent = `Order — ${PRODUCTS[id].name} (₨ ${PRODUCTS[id].price})`;
  document.getElementById('orderResult').classList.add('hidden');
  document.getElementById('orderForm').classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeOrder(){
  document.getElementById('orderModal').classList.add('hidden');
}

document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const data = Object.fromEntries(f.entries());
  const p = PRODUCTS[data.productId];
  const qty = parseInt(data.quantity,10)||1;
  const total = p.price * qty;
  const result = document.getElementById('orderResult');
  result.innerHTML = `\n+    <h4>Order placed (demo)</h4>\n+    <p><strong>Product:</strong> ${p.name}</p>\n+    <p><strong>Quantity:</strong> ${qty}</p>\n+    <p><strong>Total:</strong> ₨ ${total}</p>\n+    <p>We will contact you at <strong>${data.phone}</strong> to confirm delivery in Nepal.</p>`;
  document.getElementById('orderForm').classList.add('hidden');
  result.classList.remove('hidden');
});

// Close modal on outside click
document.getElementById('orderModal').addEventListener('click', function(e){
  if(e.target === this) closeOrder();
});
