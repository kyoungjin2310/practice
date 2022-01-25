import User from "./user";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  opponentId: {
    type: DataTypes.UUID,
    reference: {
      model: User,
    },
  },
});

export default Room;
