import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        {/*에러가 발생했을때 FallbackComponent로 연결 시켜줌*/}
        <Switch>
          {/* 책 정보 편집 */}
          <Route exact path="/edit/:id" component={Edit}></Route>
          {/* 책 상세보기 */}
          {/* book에 id값 넣어서 조회 */}
          <Route exact path="/book/:id" component={Detail}></Route>
          {/* 책을 추가 하는 페이지 */}
          <Route exact path="/add" component={Add}></Route>
          {/* 로그인 */}
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/" component={Home}></Route>
          {/* 페이지가 없는 경우 - 컴포넌트만 작성*/}
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;