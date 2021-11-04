import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const url = process.env.REACT_APP_PUBLIC_URL;
axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;
