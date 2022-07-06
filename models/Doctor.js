import { model, models, Schema } from "mongoose";
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    specialisation : [String],
    age: Number,
    patients: [{type: Schema.Types.ObjectId, ref: 'Patient'}]
});
const Doctor = models.Doctor || model('Doctor',doctorSchema);
export default Doctor;