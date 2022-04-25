import React from "react";
import { Link } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
import { BookType } from "../type";
import moment from "moment";
import { Tooltip } from "antd";

interface BookProps extends BookType {}

const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
}) => {
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
      <div>{moment(createdAt).format("MM-DD-YYYY hh:mm a")}</div>
      <div>
        <Tooltip title={url}></Tooltip>
      </div>
    </div>
  );
};

export default Book;
