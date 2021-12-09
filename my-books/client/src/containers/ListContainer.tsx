import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../component/List";
import { BookType, RootState } from "../type";

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch();
  }, [dispatch]);

  return <List books={books} loading={loading} getBooks={getBooks} />;
};

export default ListContainer;
