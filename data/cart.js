 export const cart= [];


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