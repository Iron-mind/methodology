import { Router} from 'express';
import User from "../models/User.js";




let router= Router()
router.get('/', (req, res, next) => {
	User.findAll()
		.then((users) => {
			res.send(users);
		})
		.catch((error) => console.log(error));
});

router.post('/', (req, res,next ) => {
	const user = req.body;
	User.create(user)
		.then((createdUser) => {
			res.send(createdUser);
		})
		.catch((error) => next(error));
});

export default router;