import Patient from '../../../models/Patient';
import connectMongo from '../../../utils/connectMongo';

export default async function addPatient(req, res) {
	try {
		await connectMongo();
		const patient = await Patient.create(req.body);
		console.log(patient);
		res.status(200).json('Patient Created');
	} catch (error) {
		console.log('Patient could not be added ', error);
	}
}
