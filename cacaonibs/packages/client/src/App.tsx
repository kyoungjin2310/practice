import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/*main*/}
      <Route index element={} />
      {/*친구목록*/}
      <Route path="/" element={} />
      {/*대화방*/}
      <Route index element={} />
      {/*대화방상세*/}
      <Route index element={} />
      {/*더보기*/}
      <Route index element={} />
    </Routes>
  );
}

export default App;
