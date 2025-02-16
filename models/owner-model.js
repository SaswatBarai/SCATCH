import mongoose,{Schema} from 'mongoose';

const ownerSchema = new Schema({
    fullname :{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    products:{
        type:Array,
        default:[]
    },
    gstin:String,
    picture:String,
},{timestamps:true});

const owner = mongoose.model('owner', ownerSchema);

export default owner;
