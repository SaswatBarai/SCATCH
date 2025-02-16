import mongoose,{Schema} from 'mongoose';
const userSchema = new Schema({
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
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
},{timestamps:true});

const user = mongoose.model('user', userSchema);

export default user;
