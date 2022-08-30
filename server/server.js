import express from 'express';
import morgan from 'morgan';
import { connectDB } from './db/connectDb.js';
import albumRoutes from './routes/albumRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const currentEnvironment = process.env.NODE_ENV;

const uri =
  currentEnvironment === 'development'
    ? process.env.MONGO_URI_DEV
    : process.env.MONGO_URI_PROD;

connectDB(uri);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/albums', albumRoutes);

app.get('/', (req, res) => {
  res.send('Hello API');
});

const port = process.env.PORT || 2030;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
