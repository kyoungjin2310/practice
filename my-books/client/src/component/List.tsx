import React, { useEffect } from "react";
import { Button, PageHeader } from "antd";
import { BookType } from "../type";
import Layout from "./Layout";

type ListProps = {
  books: BookType[] | null;
  loading: boolean;
  getBooks: () => void;
};

const List: React.FC<ListProps> = ({ books, loading, getBooks }) => {
  const logout = () => {};
  const goAdd = () => {};

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button key="2" type="primary" onClick={goAdd}>
            Add Book
          </Button>,
        ]}
      ></PageHeader>
    </Layout>
  );
};

export default List;
