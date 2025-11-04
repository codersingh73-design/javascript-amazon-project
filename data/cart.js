export let cart= [{
    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
quantity: 1

},  {
productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
quantity: 1
}];


 //function to add product to cart
export function addToCart(productId) {

    let foundInCart;
        cart.forEach(cartItem => {
            if (cartItem.productId === productId) {
                foundInCart = cartItem;
            }
        });
        if (foundInCart) {
            //if product is already in cart, increase its quantity by 1
            foundInCart.quantity += 1;
        } else {
            //if product is not in cart, add it with quantity 1
            //push product to cart array
            cart.push({
                productId,
                quantity: 1, //default quantity is 1
            });
        }
}

//Study Own
// one way to remove item from cart is to create a new array and add all other products except the one to be removed
// then replace the cart array with the new array
// another way is to find the index of the product to be removed and use splice method to remove it directly from cart array

//function 1 to remove product from cart
export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach(cartItem => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
}

//function 2 alternate func to remove product from cart 
export function removeFromCartAlt(productId) {
    //find the index of the product in the cart array
    const index = cart.findIndex(cartItem => cartItem.productId === productId);
    if (index !== -1) { //if product is found in cart
        cart.splice(index, 1); //remove the product from cart array
    }
}

