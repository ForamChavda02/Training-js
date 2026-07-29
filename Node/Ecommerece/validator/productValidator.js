function validateProduct(product) {
    if(!product.name) return "Product name is required";
    if(product.price <= 0) return "Price must be greater than 0";
    if(product.stock < 0) return "stock cannont be negative";

    return null;
}

module.exports = {
    validateProduct
};