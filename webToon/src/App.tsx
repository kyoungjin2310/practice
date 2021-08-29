import React from "react";
import WebToonList from "./components/WebToonList";
import WebToonListMenu from "./components/WebToonListMenu";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="wrap">
      <WebToonListMenu />
      <Switch>
        <Route path="/day/:day/:filter" component={WebToonList} />
        <Route path="/day/:day" component={WebToonList} />
        <Route exact path="/" component={WebToonList} />
      </Switch>
    </div>
  );
};

export default App;
