const crypto = require("crypto");
const apiKeyModel = require("../models/apikeyModel");
const { permission } = require("process");

async function createApiKey(req, res) {
    try {
        const apiKey = crypto.randomBytes(32).toString("hex");
        console.log("inside the create api key and before model");
        const userId = req.body.user_id;
        await apiKeyModel.createApiKey({
            user_id: userId,
            api_key: apiKey,
            name: req.body.name,
            permissions: JSON.stringify(req.body.permissions)
        });
        console.log("after model");
        res.status(201).json({
            message: "API key created-successfully",
            apiKey
        });
        console.log("after response");
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function getApiKey(req, res) {
    try {
        const result = await apiKeyModel.getAllApiKey();
        res.json(result);
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function upadteApiKey(req, res) {
    try {
        const apiKey = crypto.randomBytes(32).toString("hex");
        await apiKeyModel.UpdateApiKeyByUserId({
            api_key: apiKey,
            name: req.body.name,
            permissions: JSON.stringify(req.body.permissions),
            user_id: req.params.user_id
        });
        res.status(201).json({
            message: "data updated successfully",
            apiKey
        });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function deleteapiKey(req, res) {
    try {
        const userId = req.params.userId;
        await apiKeyModel.deleteApiKey(userId);
        res.json({ message: "api-key deleted successfully" });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    createApiKey,
    getApiKey,
    upadteApiKey,
    deleteapiKey
};