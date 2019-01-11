var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newItem = {
   itemName: item,
   itemPrice: Math.floor((Math.random() * 100) + 1)
 }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) return "Your shopping cart is empty."

  let text = ""
  for (let i=0; i<cart.length; i++) {
    text = `${text}${cart[i].itemName} at $${cart[i].itemPrice}`
    if ( cart.length > 2 && i < cart.length-2) {
      text = `${text}, `
    } else if (i === cart.length-2){
      text = `${text}, and `
    }
  }
  return `In your cart, you have ${text}.`
}

function total() {
  // write your code here
  let sum
  for (let i=0; i<cart.length; i++) {
    sum =+ cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
