import mongoose,{Schema} from 'mongoose'

const productSchema = new Schema({
      image:String,
        name:String,
        price:Number,
        discount:{
            type:Number, 
            default:0
        },
        bgColor:String,
        panelColor:String,
        textColor:String,

});

const product = mongoose.model('product', productSchema);

export default product;

