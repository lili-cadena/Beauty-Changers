const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name:String,
    image: String,
    price: Number,
    quantity: {
        type:Number,
        default:1
    },
    sku:{
        type:Number,
        unique:true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

module.exports = mongoose.model('Product', productSchema);