import React, { useEffect } from "react";
import { BookType } from "../type";
import Layout from "./Layout";

type ListProps = {
  books: BookType[] | null;
  loading: boolean;
};

const List: React.FC<ListProps> = ({ books, loading }) => {
  const logout = () => {};
  const goAdd = () => {};

  useEffect(() => {}, []);

  return (
    <Layout>
      <div>Book List</div>
      <button onClick={goAdd}>Add Book</button>
      <button onClick={logout}>Logout</button>
      <div>
        <ul>
          <li>
            <h2>Book</h2>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default List;
