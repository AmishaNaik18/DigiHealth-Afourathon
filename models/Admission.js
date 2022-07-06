import { model, models, Schema } from "mongoose";
const admissionSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor:{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    dateOfAdmission : {
        type: Date,
        default : () => Date.now()
    },
    dateOfDischarge : Date,
    roomNo: String,
    reason: String,
    admitted: Boolean,
    health_status: String
});
const Admission = models.Admission || model('Admission',admissionSchema);
export default Admission;