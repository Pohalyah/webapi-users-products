import mongoose from "mongoose";

import pgPromise from 'pg-promise';

// Connexion à une base de données PostgreSQL
const pgp = pgPromise();
const dbPostgre = pgp('postgres://postgres:supersecuredpassword@127.0.0.1:5432/society');

/**
 * Connection à une base de données MongoDB
 */
const connect = async () => {

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};

export { connect, dbPostgre as db };
