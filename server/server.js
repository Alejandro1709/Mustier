import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 2030;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
