import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './db/connectDb.js';

dotenv.config();

const currentEnvironment = process.env.NODE_ENV;

const uri =
  currentEnvironment === 'development'
    ? process.env.MONGO_URI_DEV
    : process.env.MONGO_URI_PROD;

connectDb(uri);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

const port = process.env.PORT || 2030;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
