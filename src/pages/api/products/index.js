//import nc from 'next-connect';
import db from '../../../../utils/db';
import Product from '../../../../models/Product';

//const handler = nc();

export default async function handler(req, res) {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
  //res.status(200).json(products);
}
