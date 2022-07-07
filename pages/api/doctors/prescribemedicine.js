import Patient from '../../../models/Patient';
import connectMongo from '../../../utils/connectMongo';

export default async function addPrescription(req, res) {
	try {
		await connectMongo();
		const patient = await Patient.findById(req.body.patient);
        const prescription = {
            medicines: req.body.medicines,
            doctor: req.body.doctor,
            datePrescribed: Date.now()
        };
        patient.prescriptions.push(prescription);
        await patient.save();
		res.status(200).json('Prescription Added');
	} catch (error) {
		console.log('Prescription could not be added ', error);
	}
}
