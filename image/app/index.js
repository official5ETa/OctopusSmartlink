import express from 'express';

const app = express();

app.set('views', 'templates');
app.set('view engine', 'ejs');

app.use('/static', express.static("static"));

app.get('/l/:url', (req, res) => {
  const url = req.params.url;
  res.render('smartlink', { url });
});

app.listen(80, () =>
  console.log('server listening [:80]'));