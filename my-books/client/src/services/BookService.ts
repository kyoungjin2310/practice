import axios from "axios";
import { BookType } from "../type";
import { USER_API_URL } from "./UserService";

export default class BookService {
  public static async getBooks(token: string): Promise<BookType[]> {
    const response = await axios.get(`${USER_API_URL}/books`);
  }
}
