import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MYSQL_URI =
  process.env.MYSQL_URI || "";

