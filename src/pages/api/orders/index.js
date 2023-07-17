import nc from 'next-connect';
import Order from '../../../../models/Order';
import { isAuth } from '../../../../utils/auth';
import db from '../../../../utils/db';
//import { onError } from '../../../../utils/error';

const handler = nc({
  onError: (err, req, res) => {
    console.error(err); // log the error on server-side
    res.status(500).json({ error: err.toString() }); // send detailed error message to client
  },
});
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  console.log(Order);
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
});

export default handler;
