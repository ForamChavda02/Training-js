function validateCart(cart) {
    if(!cart.user_id) return "user_id is required";
    if(!cart.product_id) return "Product_id is required";
    if(cart.quantity < 0) return "quantity can never be negative";

    return null;
}

module.exports = {
    validateCart
};