import React, { useEffect } from "react";
import { Button, PageHeader, Table } from "antd";
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
          <Button key="1" type="primary" onClick={logout}>
            Logout
          </Button>,
        ]}
      ></PageHeader>
      <Table
        dataSource={[]}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: () => <div>book</div>,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
      ></Table>
    </Layout>
  );
};

export default List;
