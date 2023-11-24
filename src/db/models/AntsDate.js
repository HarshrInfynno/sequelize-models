const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ants_date', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    notice_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donedatetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ants_date',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
