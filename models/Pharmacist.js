import { model, models, Schema } from "mongoose";
const pharmacistSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    specialisation : [String],
    age: Number
});
const Pharmacist = models.Pharmacist || model('Pharmacist',pharmacistSchema);
export default Pharmacist;