const customer = (req, res, next) => {
    if(req.user.role !== "customer") {
        return res.status(403).json({
            message: "Only customer can place orders"
        });
    }
    next();
};

module.exports = customer;