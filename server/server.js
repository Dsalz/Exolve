import 'babel-polyfill';
import express from 'express';

//Routers
import stockRouter from './routes/api/stock';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

const currApiPrefix = '/api/v1';

app.use(`${currApiPrefix}/stock`, stockRouter);
app.use('/', (req, res) => res.status(404).send({message: 'Invalid Route'}));

app.listen(port, () => console.log(`Serving on port ${port}`))

export default app;
