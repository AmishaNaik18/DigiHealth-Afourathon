import { model, models, Schema } from "mongoose";
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    specialisation : [String],
    age: Number
});
const Doctor = models.doctorSchema || model('Doctor',doctorSchema);
export default Doctor;