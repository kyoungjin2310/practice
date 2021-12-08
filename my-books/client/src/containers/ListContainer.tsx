import React from "react";
import { useSelector } from "react-redux";
import List from "../component/List";
import { BookType, RootState } from "../type";

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  return <List books={books} loading={loading} />;
};

export default ListContainer;
