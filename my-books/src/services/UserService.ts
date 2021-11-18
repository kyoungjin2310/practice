import React, { useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { LoginReqType } from "../type";

dotenv.config();

const USER_API_URL = process.env.REACT_APP_BASIC_SERVER_URL;
export const loginFn = async (reqData: LoginReqType): Promise<string> => {
  const response = await axios.post(`${USER_API_URL}/login`, reqData);
  return response.data.token;
};
export const logoutFn = async (token: string): Promise<void> => {
  await axios.delete(`${USER_API_URL}/login`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
