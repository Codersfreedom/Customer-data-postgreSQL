import express from "express";
import pg from "pg";
const { Client } = pg

const app = express();


function connectToDb() {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "employee",
  });

  client.connect();
  console.log("connected to db")
  
}

export default connectToDb;