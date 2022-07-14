import Nurse from '../../../models/Nurse';
import Account from '../../../models/Account';
import connectMongo from '../../../utils/connectMongo';

export default async function addNurse(req, res) {
	try {
		await connectMongo();
		const nurse = await Nurse.create(req.body);
        const accountObj = {
            username: req.body.username,
            password: req.body.password,
            _nurse: nurse._id
        }
        const account = await Account.create(accountObj);
		console.log(account);
		res.status(200).json('Nurse Created');
	} catch (error) {
		console.log('Nurse could not be added ', error);
	}
}