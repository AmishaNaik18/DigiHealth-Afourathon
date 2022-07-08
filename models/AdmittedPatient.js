import { model, models, Schema, SchemaTypes } from "mongoose";
const admittedpatientSchema = new Schema({
    pid: SchemaTypes.ObjectId,
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    admitted: String,
    age: Number,
    health_status: String,
    nurse: SchemaTypes.ObjectId,
});
const Admitted_Patient = models.Admitted_Patient || model('Admitted_Patient',admittedpatientSchema);
export default Admitted_Patient;