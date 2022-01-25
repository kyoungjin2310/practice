const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  },
  username: DataTypes.STRING,
  thumbnailImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
