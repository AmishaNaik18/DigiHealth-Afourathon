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
    date: Date,
    fees: Number
});
const checkupSchema = new Schema({
    doctor: SchemaTypes.ObjectId,
    checkupType: String,
    date: Date,
    fees: Number
});
const medicineSchema = new Schema({
    medicine: String,
    purpose: String,
    doses: Number,
});
const prescriptionSchema = new Schema({
    medicines: [medicineSchema],
    doctor: Schema.Types.ObjectId,
    datePrescribed: {
        type: Date,
        default : () => Date.now()
    }
})
const patientSchema = new Schema({
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
    checkup: [checkupSchema],
    surgery: [surgerySchema],
    prescriptions: [prescriptionSchema]
});
const Patient = models.Patient || model('Patient', patientSchema);
export default Patient;