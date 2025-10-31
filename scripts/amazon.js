//Study
// import * as syntax imports everything from the module as an object
// import {specific} syntax imports specific named exports from the module
// like import * as cartModule from '../data/cart.js';
// then can access cartModule.cart and cartModule.addToCart

import {cart,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {moneyFormat} from './utils/money.js';

//Study (Main idea of javascript))
//1.  Save the data 
//2. genrate HTML dynamically based on data
//3. Make it interactive (event listeners etc)



//generating products grid HTML dynamically
let productsHTML='';

//looping through each product and creating HTML
products.forEach((product) => {

    productsHTML+=`
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars*10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    $${moneyFormat(product.priceCents)}
                </div>

                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
                </div>
    `;
});

//Study
//above here we can send  (just use data- and the name spaced with (-) )  data-product-name attribute to identify which product is added to cart

//inserting products HTML into the DOM
document.querySelector('.js-products-grid').innerHTML= productsHTML;

    //Study
    // functions created using function keyword can be called before its declaration due to hoisting
    // arrow functions do not support hoisting

// function to update cart quantity in the header at HTML page s
function updateCartQuantity() {
        // Calculate total cart quantity (moved outside if/else)
        let cartquantity = 0;
        cart.forEach(cartItem => {
            cartquantity += cartItem.quantity;
        });
        document.querySelector('.js-cart-quantity').innerHTML = cartquantity;

}

//adding event listeners to all add to cart buttons
document.querySelectorAll('.js-add-to-cart')
.forEach(button => {
    button.addEventListener('click', () => {
        //Study
        // now were are retriving the data sent by Data- attribute of an HTMl tag. by using dataset object property,
        // also the name don't reqiure - b/w the name in (HTML product-id) = (productId here in JS)
        const productId= button.dataset.productId;

        addToCart(productId);
        console.log(cart);
        updateCartQuantity();
        
    });
});