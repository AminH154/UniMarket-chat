const express = require('express');
const router = express.Router();
const {getAllProducts,PostProduct} = require('../controllers/product.controllers');



router.get('/',getAllProducts);
router.post('/',PostProduct);
module.exports = router;
