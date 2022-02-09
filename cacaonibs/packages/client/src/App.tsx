import React from "react";
import { Routes, Route } from "react-router-dom";
import Friends from "./pages/Friends";
import Lobby from "./pages/Lobby";
import RoomDetail from "./pages/RoomDetail";
import RoomList from "./pages/RoomList";
import SeeMore from "./pages/SeeMore";

function App() {
  return (
    <Routes>
      {/*main*/}
      <Route index element={<Lobby />} />
      {/*친구목록*/}
      <Route path="/friends" element={<Friends />} />
      {/*대화방*/}
      <Route path="/rooms" element={<RoomList />} />
      {/*대화방상세*/}
      <Route path="/rooms/:roomId" element={<RoomDetail />} />
      {/*더보기*/}
      <Route path="/more" element={<SeeMore />} />
    </Routes>
  );
}

export default App;
