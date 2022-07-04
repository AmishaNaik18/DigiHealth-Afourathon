import Doctor from '../../../models/Doctor';
import Account from '../../../models/Account';
import connectMongo from '../../../utils/connectMongo';

export default async function addDoctor(req, res) {
	try {
		await connectMongo();
		const doctor = await Doctor.create(req.body);
        const accountObj = {
            username: req.body.username,
            password: req.body.password,
            _doctor: doctor._id
        }
        const account = await Account.create(accountObj);
		console.log(account);
		res.status(200).json('Doctor Created');
	} catch (error) {
		console.log('Doctor could not be added ', error);
	}
}
