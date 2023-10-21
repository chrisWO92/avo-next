import { delBasePath } from 'next/dist/shared/lib/router/router';
import Database from'../../../database-2/db';
import { NextApiRequest, NextApiResponse } from 'next';

const avo = async (req, res) => {
  const data = await Database.getAll();
  const length = data.length
  const avo = req.query.id
  const entry = await Database.getById(avo)

  //otra forma de generar un endpoint
  /* res.status = 200
  res.setHeader('Content-type', 'application/json') */
  
  //mejor manera de generar primer endpoint
  res.status(200).json(entry)

  

};

export default avo;