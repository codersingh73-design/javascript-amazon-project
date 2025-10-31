 export const cart= [{
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