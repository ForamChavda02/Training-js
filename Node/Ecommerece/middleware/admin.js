const admin = (req, res, next) => {

    if(!req.user || req.user.activeRole !== "admin") {
        return res.status(403).json({ message: "Admin access required" });
    }
    next();
};

module.exports = admin;