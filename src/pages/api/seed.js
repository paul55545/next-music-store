// import db from '../../../utils/db';
// import Product from '../../../models/Product';
// import data from '../../../utils/data';
// import User from '../../../models/User';

// //const handler = nc();

// export default async function handler(req, res) {
//   await db.connect();
//   await User.deleteMany();
//   await User.insertMany(data.users);
//   await Product.deleteMany();
//   await Product.insertMany(data.products);
//   await db.disconnect();
//   res.send({ message: 'seeded successfully' });
//   //res.status(200).json(products);
// }

import { createRouter } from 'next-connect';
//import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import data from '../../utils/data';

const router = createRouter();
//const handler = nc();

//handler.get
router.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default router.handler();
//export default handler;
