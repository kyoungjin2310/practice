import { rest } from "msw";
import dotenv from "dotenv";

dotenv.config();

export const url = process.env.REACT_APP_PUBLIC_URL;
export const handlers = [
  rest.get(`${url}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
    );
  }),
  rest.get(`${url}/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
];
