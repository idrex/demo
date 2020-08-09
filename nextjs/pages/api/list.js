// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.query);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => ({id: item.toString(), name: "John Doe" + item }))
  res.statusCode = 200;
  res.json(arr);
};
