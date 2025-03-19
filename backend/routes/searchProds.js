const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

router.get('/allProdsfind', async (req, res) => {
    const searchQuery = req.query.search; 

    try {
        
        const prods = await Products.find({ name: { $regex: searchQuery, $options: 'i' } });

        res.json(prods);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
});

module.exports = router;
