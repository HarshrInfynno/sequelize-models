const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_round_robin_assignment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rule_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'wf_round_robin_assignment',
    timestamps: true,
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
