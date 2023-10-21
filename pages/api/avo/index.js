import Database from'../../../database-2/db';

const allAvos = async (req, res) => {
  const data = await Database.getAll();
  const length = data.length
  res.status = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({length, data}))
  //res.status(200).json({ data,length:data.length });
  //res.end(JSON.stringify({hello: 'world'}))
};

export default allAvos;