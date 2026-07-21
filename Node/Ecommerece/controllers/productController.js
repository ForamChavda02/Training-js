function getProducts(req, res) {
    res.json(products);
}

function addProduct(req, res) {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(newProduct);
    res.json({ message: "new product added" });
}

function updateProduct(req, res) {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if(!product) {
        return res.status(404).json({message: "product not found"});
    }
    product.name = req.body.name;
    res.json(product);
}

function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    const Index = products.findIndex(p => p.id === id);
    if(Index === -1) {
        return res.status(404).json({ message: "product not found"});
    }
    products.splice(Index, 1);
    res.json({message: "product deleted sccessfully"});
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}