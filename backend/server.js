import { configDotenv } from 'dotenv'
import express from 'express'
import dotenv from 'dotenv'

import pg from "pg";
const { Client } = pg;

dotenv.config();
const PORT = process.env.PORT || 5000

const app = express()


const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "employee",
  });

  client.connect();
 
  

  app.get('/api/customer', async (req, res) => {
    const { rows } = await client.query(`SELECT * from employee`) 
    res.send(rows)
  })
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })