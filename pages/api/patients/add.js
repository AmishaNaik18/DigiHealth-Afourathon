import Patient from '../../../models/Patient';
import Account from '../../../models/Account';
import connectMongo from '../../../utils/connectMongo';

export default async function addPatient(req, res) {
	try {
		await connectMongo();
		const patient = await Patient.create(req.body);
        const accountObj = {
            username: req.body.username,
            password: req.body.password,
            _patient: patient._id
        }
        const account = await Account.create(accountObj);
		console.log(account);
		res.status(200).json('Patient Created');
	} catch (error) {
		console.log('Patient could not be added ', error);
	}
}
