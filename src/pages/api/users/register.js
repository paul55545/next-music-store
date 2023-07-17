import { createRouter } from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../../models/User';
import db from '../../../../utils/db';
import { signToken } from '../../../../utils/auth';

const router = createRouter();

router.post(async (req, res) => {
  await db.connect();
  if (!req.body.password) {
    return res.status(400).send({ message: 'Password is missing' });
  }
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default router.handler();
