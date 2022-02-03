import sequelize from "../sequelize";
import { DataTypes } from "sequelize";

import User from "./user";
import Room from "./room";

const Chat = sequelize.define("chat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //채팅 메시지 내용
  content: DataTypes.STRING,
  //보내는 아이디
  senderId: {
    type: DataTypes.UUID,
    references: {
      model: User,
    },
  },
  //채팅방
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: Room,
    },
  },
});

Chat.belongsTo(User, { foreignKey: "senderId" });
Chat.belongsTo(Room, { foreignKey: "roomId" });

export default Chat;
