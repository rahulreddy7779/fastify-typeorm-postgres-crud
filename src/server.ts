import "reflect-metadata"; // MUST be first
import { app } from "./app";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";

dotenv.config();

const start = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Database connected");

    await app.listen({ port: Number(process.env.PORT) || 3000 });
    console.log(`🚀 Server running at http://localhost:${process.env.PORT || 3000}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
