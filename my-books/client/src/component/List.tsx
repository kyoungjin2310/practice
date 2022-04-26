import React, { useEffect } from "react";
import { Button, PageHeader, Table } from "antd";
import { BookType } from "../type";
import Layout from "./Layout";
import Book from "./Book";
import styles from "./List.module.css";

type ListProps = {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
};

const List: React.FC<ListProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
}) => {
  const goAdd = () => {};

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button
            key="2"
            type="primary"
            onClick={goAdd}
            className={styles.button}
          >
            Add Book
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button}
          >
            Logout
          </Button>,
        ]}
      ></PageHeader>
      <Table
        dataSource={books || []}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: (text, recode) => <Book {...recode} />,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
        className={styles.table}
      ></Table>
    </Layout>
  );
};

export default List;
