//채팅 관련 router
import { Router } from "express";

import Chat from "../schemas/chat";
import User from "../schemas/user";
import Room from "../schemas/room";

const router = Router();

/*채팅 목록 조회*/
router.get("/:roomId", async (req, res) => {
  try {
    const chat = await Chat.findAll({
      where: {
        roomId: req.params.roomId,
      },
      include: [User, Room],
    });
    res.json(chat);
  } catch (e) {}
});

/*채팅 전송*/
router.post("/:roomId", async (req, res) => {
  try {
    const chat = await Chat.create({
      // @ts-ignore
      senderId: req.session.userId,
      content: req.body.content,
      roomId: req.params.roomId,
    });

    const io = req.app.get("io");

    io.of("/chat").to(req.params.roomId).emit("chat", chat);

    /*TODO:: socket*/
    res.json({ message: "OK" });
    // HTTP 통신의 통신 방식
    // - 클라이언트의 요청이 있을 때 서버가 응답하는 방식. 단방향 통신

    // 소켓통신
    // - 클라이언트와 서버 양쪽에서 서로에게 데이터를 전달하는 방식. 양방향 통신

    // 차이점
    // - 자주 데이터를 주고 받는 환경이 아닌경우 HTTP 통신을 통해 받는 것이 유리함
    // - 자주 데이터를 주고 받아야 하는 환경에서는 소켓 통신이 유리
    // - HTTP 통신은 사용자가 서버에 요청을 보내는 단방향 통신인 반면, 소켓 통신은 양방향 통신
  } catch (e) {}
});

export default router;
