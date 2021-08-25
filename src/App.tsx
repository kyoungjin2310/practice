import React from "react";
import WebToonApp from "./containers/webToonApp";
import WebToonList from "./components/WebToonList";
import { Route, Switch } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <WebToonApp />
      <Switch>
        <Route path="/day/:day" component={WebToonList} />
        <Route path="/" component={WebToonList} />
      </Switch>
    </>
  );
};

export default App;
