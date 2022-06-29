import { model, models, Schema } from "mongoose";
const nurseSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    age: Number
});
const Nurse = models.nurseSchema || model('Nurse',nurseSchema);
export default Nurse;