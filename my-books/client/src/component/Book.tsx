import React from "react";
import { Link } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
type BookProps = {
  bookId: number;
  title: string;
};

const Book: React.FC<BookProps> = ({ bookId, title }) => {
  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <BookOutlined>{title}</BookOutlined>
      </Link>
    </div>
  );
};

export default Book;
