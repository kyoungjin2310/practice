import { createActions } from "redux-actions";

interface BooksState {
  books: Book[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: BooksState = {
    books: null,
    loading: false,
    error: null,
}

const prefix = "my-books/books";

export const {pending, success, fail} = createActions('PENDING'. 'SUCCESS', 'FAIL', {prefix})

const reducer = hendleActions<BooksState, Book>({
    PENDING:(state)=>({}),
    SUCCESS:()=>({}),
    FAIL:()=>({})
}, initialState, {prefix})