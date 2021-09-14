import React, { createContext, useReducer, useContext } from "react";
import { List } from "../../api/data";
const LayoutActionType = {
  ListSort: "LIST_SORT",
  DateViews: "DATE_VIEWS",
};

type IState = List[];

type IAction = string;

const LayoutStateContext = createContext<IState>();
const LayoutDispatchContext = createContext<React.Dispatch<IAction>>();

const reducer: React.Reducer<IState, IAction> = (
  state: IState,
  action: IAction
) => {
  switch (action.type) {
    case LayoutActionType.ListSort:
      return { ...state, loading: true };
    case LayoutActionType.DateViews:
      return { ...state, loading: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const LayoutProvider = (props): React.FunctionComponent => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    reducer,
    {}
  );

  return (
    <LayoutStateContext.Provider value={state as IState}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {props.children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
};

export const useLayoutState = (): IState => {
  const context = useContext<IState>(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }

  return context;
};

export const useLayoutDispatch = () => {
  const context = useContext<React.Dispatch<IAction>>(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }

  return context;
};

export const ListSort = (dispatch: React.Dispatch<IAction>) => {
  dispatch({
    type: LayoutActionType.ListSort,
  });
};

export const DateViews = (dispatch: React.Dispatch<IAction>) => {
  dispatch({
    type: LayoutActionType.DateViews,
  });
};

export default LayoutProvider;
