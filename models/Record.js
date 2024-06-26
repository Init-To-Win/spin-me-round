const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Record extends Model {}

Record.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cover_art: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spotify_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "artist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "record",
  }
);

module.exports = Record;
