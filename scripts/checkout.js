import {cart,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {moneyFormat} from './utils/money.js';

//Study
// the fact that we only stored productId and quantity in cart,
// we can retrieve other product details from products data using productId
// this is called data normalization (deduping/deduplicating data to avoid redundancy)

let cartSummaryHTML= '';

////Genrate HTML dynamically based on cart data looping through each cart item
//saved cart data in mached product details and generating HTML
cart.forEach(cartItem => {
    const productId= cartItem.productId;

    let matchedProduct;
    products.forEach(product => {
        if (product.id === productId) {
            matchedProduct = product;
        }
    });

    cartSummaryHTML +=
    `
        <div class="cart-item-container">
            <div class="delivery-date">
                Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchedProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchedProduct.name}
                </div>
                <div class="product-price">
                    $${moneyFormat(matchedProduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>

                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchedProduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                        FREE Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-${matchedProduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                        $4.99 - Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchedProduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                        $9.99 - Shipping
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
    `
});
// Study
// we have genrated/ assigneed the name attribute of radio input dynamically using product id
// this will help us to group the radio buttons for each product separately with unique names for each product while using same name for selecting only one delivery option per product.
// so that selecting a delivery option for one product does not affect the other products
// because (radio buttons with the same name are grouped together so only one can be selected at a time within that group.)

//inserting generated HTML to DOM
document.querySelector('.js-order-summary').innerHTML= cartSummaryHTML;

