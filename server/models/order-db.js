const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    size: { type: String, required: true },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', productSchema);