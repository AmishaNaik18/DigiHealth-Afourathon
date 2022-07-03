import { model, models, Schema } from "mongoose";
const nurseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
});
const Nurse = models.Nurse || model('Nurse',nurseSchema);
export default Nurse;