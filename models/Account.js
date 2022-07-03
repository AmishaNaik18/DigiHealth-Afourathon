import { model, models, Schema } from "mongoose";
const accountSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required : true
    }, 
    regDate: {
        type: Date,
        default : () => Date.now(),
    },
    _doctor : {type: Schema.Types.ObjectId, ref: 'Doctor'},
    _nurse : {type: Schema.Types.ObjectId, ref: 'Nurse'},
    _patient : {type: Schema.Types.ObjectId, ref: 'Patient'},
});
const Account = models.accountSchema || model('Account',accountSchema);
export default Account;