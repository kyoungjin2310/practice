import Room from "./room";
import User from "./user";

const { DataTypes } = require("sequelize");
import sequelize from "../sequelize";

const Chat = sequelize.define("chat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //채팅 메시지 내용
  constent: DataTypes.STRING,
  //보내는 아이디
  senderId: {
    type: DataTypes.UUID,
    reference: {
      model: User,
    },
  },
  //채팅방
  roomId: {
    type: DataTypes.INTEGER,
    reference: {
      model: Room,
    },
  },
});

export default Chat;
