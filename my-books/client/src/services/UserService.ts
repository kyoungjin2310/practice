import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import { LoginReqType } from "../type";

dotenv.config();

export const USER_API_URL = process.env.REACT_APP_SERVER_URL;

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(`${USER_API_URL}auth/login`, reqData);
    return response.data.access_token;
  }
  public static async logout(access_token: string): Promise<void> {
    await axios.delete(`${USER_API_URL}auth/login`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  }
}
