import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
import Header from "./component/Header";
import Login from "./component/Login";
import Register from "./component/Register";

//function App() {
//return (
//<ErrorBoundary FallbackComponent={Error}>
//<ConnectedRouter history={history}>
//{/*에러가 발생했을때 FallbackComponent로 연결 시켜줌*/}
//<Switch>
//{/* 책 정보 편집 */}
//<Route exact path="/edit/:id" component={Edit}></Route>
// {/* 책 상세보기 */}
//          {/* book에 id값 넣어서 조회 */}
//        <Route exact path="/book/:id" component={Detail}></Route>
//      {/* 책을 추가 하는 페이지 */}
//    <Route exact path="/add" component={Add}></Route>
//  {/* 로그인 */}
//<Route exact path="/signin" component={SignIn}></Route>
//<Route exact path="/" component={Home}></Route>
//{/* 페이지가 없는 경우 - 컴포넌트만 작성*/}
//<Route component={NotFound}></Route>
//</Switch>
//</ConnectedRouter>
//</ErrorBoundary>
//);
//}

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h2>JWT Authentication using JSON fake server</h2>
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
