const db = require("../db");
const reviewModel = require("../models/reviewModel");

async function addReview(req, res) {
    try {
        const { user_id, product_id, rating, review } = req.body;
        const reviews = {
            user_id, 
            product_id,
            rating,
            review
        };
        await reviewModel.addReview(reviews);

        res.json({ message: "review added successfully" });
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function getReviews(req, res) {
    try {
        const productId = Number(req.params.productId);
        if(!productId) {
            return res.status(400).json({ message: "productId query parameter is required" });
        }
        const result = await reviewModel.getReviewByProduct(productId);

        return res.json(result);
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function updateReview(req, res) {
    try {
        const id = req.params.id;
        const { user_id, product_id, rating, review } = req.body;
        const reviews = {
            user_id,
            product_id,
            rating,
            review
        };
        await reviewModel.updateReview(id, reviews);
        res.json({ message: "review updated"});
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function deleteReview(req, res) {
    try {
        const id = req.params.id;
        const result = await reviewModel.deleteReview(id);
        res.json({ message: "review deleted"});
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    addReview,
    getReviews,
    updateReview,
    deleteReview
};