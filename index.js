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

function viewCart() {if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
}
else{
     var myString = "In your cart, you have "
        for(var i = 0, l = cart.length; i < l; i++){
            for(var list in cart[i]){
            myString+=`${list} at $${cart[i][list]}`
                if(i!==cart.length-1){
                  myString+=", "
                }
                else{
                  myString+="."
                }
              }

          }

    console.log(myString)
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
