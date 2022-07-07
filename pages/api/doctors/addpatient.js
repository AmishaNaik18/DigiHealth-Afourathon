import Doctor from '../../../models/Doctor';
import Account from '../../../models/Account';
import connectMongo from '../../../utils/connectMongo';

export default async function addDoctor(req, res) {
	try {
		await connectMongo();
		const doctor = await Doctor.findById(req.body.id);
        doctor.patients.push(req.body.patient);
        doctor.save().then(savedDoc => {
            res.json(savedDoc);
        });
	} catch (error) {
		console.log('Doctor could not be added ', error);
	}
}
