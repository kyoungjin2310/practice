import React from "react";
import { Link } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
import { BookType } from "../type";

interface BookProps extends BookType {}

const Book: React.FC<BookProps> = ({ bookId, title, author }) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined>{title}</BookOutlined>
        </Link>
      </div>
      <div>
        <Link to={`/book/${bookId}`}>{author}</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Book;
