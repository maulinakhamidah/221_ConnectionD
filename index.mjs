

app.get('/', (req, res) => {
  console.log("TEST DATA : ");
  pool
    .query('SELECT * FROM biodata')
    .then((testData) => {
      console.log(testData.rows);
      res.status(200).json(testData.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

