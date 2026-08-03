const db = require("../db");
const Coupon = require("../models/couponModel");

async function addCoupon(req, res){
    try {
        const { code, discount, type, min_amount, expiry_date, is_active } = req.body;
        const coupon = {
            code,
            discount,
            type,
            min_amount,
            expiry_date,
            is_active
        };

        await Coupon.createCoupon(coupon);

        res.json({ message: "coupon created" });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function getCoupons(req, res) {
    try {
        const result = await Coupon.getCoupons();

        res.json(result);
    }
    catch(error) {
        res.json({ message: error.message });
    }
}

async function updateCoupon(req, res) {
    try {
        const id = req.params.id;
        console.log("inside updateCoupon and after id");
        const { code, discount, type, min_amount, expiry_date, is_active } = req.body;
        console.log(req.body);

        const coupon = {
            code,
            discount,
            type,
            min_amount,
            expiry_date,
            is_active
        };

        await Coupon.updateCoupon(id, coupon);
        console.log("after db function");
        res.json({ message: "coupon updated successfully" });
    }
    catch(error) {
        res.json({ message: error.message });
    }
}

async function deleteCoupon(req, res) {
    try {
        const id = req.params.id;
        await Coupon.deleteCoupon(id);
        res.json({ message: "coupon deleted successfuly"});
    }
    catch(error) {
        res.json({ message: error.message });
    }
}

async function applyCoupon(req, res) {
    try {
        const { code, userId } = req.body;
        const coupon = await Coupon.getCouponByCode(code);
        if(!coupon) {
            return res.json({ message: "Invalid coupon" });
        }
        if(coupon[0].is_active === 0) {
            return res.json({ message: "coupon is inActive" });
        }
        if(new Date(coupon[0].expiry_date) < new Date()) {
            return res.json({ message: "Coupon Expired" });
        }

        const cartTotal = await Coupon.getCartTotal(userId);
        const total = Number(cartTotal[0].total);
        if(cartTotal[0].total === 0) {
            return res.json({
                message: "the cart is empty"
            });
        }
        if(total < coupon[0].min_amount) {
            return res.json({ message: "Minimum amount not reached" });
        }
        let discount = 0;
        if(coupon[0].type === "percentage") {
            discount = total * coupon[0].discount / 100;
        }
        else {
            discount = coupon[0].discount;
        }
        let finalAmount = total - discount;
        discount = Number(discount.toFixed(2));
        finalAmount = Number(discount.toFixed(2));
        res.json({
            "cartTotal": total,
            "discount": discount,
            "finalAmount": finalAmount
        });
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    addCoupon,
    getCoupons,
    updateCoupon,
    deleteCoupon,
    applyCoupon
};