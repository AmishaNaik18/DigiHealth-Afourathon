import { model, models, Schema, SchemaTypes } from "mongoose";
const healthRecordSchema = new Schema({
    lastUpdated : {
        type: Date,
        default : () => Date.now(),
    }, 
    bloodPressure: Number,
    sugar : Number,
    allergy : [String],
    disease : [String]
});
const surgerySchema = new Schema({
    doctor: SchemaTypes.ObjectId,
    surgeryType: String,
    date: Date
})
const patientSchema = new Schema({
    regDate: {
        type: Date,
        default : () => Date.now(),
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dob: Date,
    age: Number,
    height: Number,
    weight: Number,
    phoneNo: String,
    address: String,
    healthRecord: {
        type: healthRecordSchema,
        default: () => ({})
    },
    surgery: [surgerySchema]
});
const Patient = models.patientSchema || model('Patient', patientSchema);
export default Patient;