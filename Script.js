function sendWhatsApp() {
  const item = document.getElementById("item").value;
  const qty = document.getElementById("quantity").value;
  const shop = document.getElementById("shop").value;

  if (!item || !qty || !shop) {
    alert("Please fill all fields");
    return;
  }

  const message = `Tiffin Box Order:\n\nItem: ${item}\nQuantity: ${qty}\nShop Number: ${shop}`;
  const encodedMessage = encodeURIComponent(message);
  const phone = "9779823141208";
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  // 🟢 Force open using anchor tag – WORKS on Android
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener noreferrer");

  // Fake click
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}