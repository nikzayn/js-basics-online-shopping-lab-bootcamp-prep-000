var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newItem = {};
  newItem[item] = price;
  cart.push(newItem);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
    var size = cart.length
  var cartMessage = 'In your cart, you have'
  var itemPrice = []
  var twoItems = itemPrice.join(' and')               //returns array with new delimiter
  var moreItems = itemPrice.slice(0, itemPrice.length -1).join(' ,')
  var lastItem = itemPrice[itemPrice.length-1]
  //if empty
  if (size === 0) {
    console.log("Your shopping cart is empty.")
  }
  //If not empty loop
  else {
    for (var i=0; i < size; i++) {
      //Loop Dictionary
      var cart0 = cart[i]
      var item = Object.keys(cart0)[i]                //retrieves item as string from cart
      var price = cart0[item]                         //retrieves price as string from cart
      //Loop push
      itemPrice.push(` ${item} at ${price}`)          //adds it to the target array
      //Cart Messages
      if (size === 1) {                               //if 1 in cart
        console.log(`${cartMessage} ${itemPrice}.`)
      }
      if (size === 2) {                               //if 2 in cart
        console.log(`${cartMessage}${twoItems}.`)
      }
      if (size >= 3) {                                //if 3 or more in cart
        console.log(`${cartMessage}${moreItems} and${lastItem}.`)
      }
    }
  }
}

function total()  {
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}

function removeFromCart(item) {
  var itemRemove = false;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      itemRemove = true;
      cart.splice(i,1);
    }
  }
  if(!itemRemove){
     console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
    else{
      console.log("Your total cost is $ " + total() + ", which will be charged to the card " + cardNumber + ".");
      cart = [];
    }
}
