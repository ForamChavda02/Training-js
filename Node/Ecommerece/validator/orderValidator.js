function validateOrder(order) {
    if(!order.user_id) return "user_id required";

    return null;
}

module.exports = {
    validateOrder
};