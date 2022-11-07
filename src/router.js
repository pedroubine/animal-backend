const express = require('express');
const router = express.Router();
const db = require('./models/firebase_connect');

router.post('/create', async (req, res) => {
	try {
		console.log(req.body);
		const id = req.body.email;
		const userJson = {
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		};
		const response = await db.collection('users').doc(id).set(userJson);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
});
router.get('/', (req, res) => {
	res.status(200).send('Rauter working !!!');
});

module.exports = router;
