import Admission from '../../../models/Admission';
import connectMongo from '../../../utils/connectMongo';

export default async function addPatient(req, res) {
	try {
		await connectMongo();
        console.log("being created");
		const patient = await Admission.create(req.body);
		console.log(patient);
		res.status(200).json('Admission Created');
	} catch (error) {
		console.log('Admission could not be added ', error);
	}
}
