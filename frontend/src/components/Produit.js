const mongoose = require ("mongoose");



const ProduitSchema = mongoose.Schema({
    name : {type : String , required: true},
    category : { type: String , required: true},
    price : { type: Number , required: true},
    brand : { type: String , required: true},
    numReviews : { type: Number , required: true},
    rating : { type: Number , required: true},
    description : { type: String , required: true},


    


});

const ProduitModel =mongoose.model('Produit', ProduitSchema);
module.exports = ProduitModel;


