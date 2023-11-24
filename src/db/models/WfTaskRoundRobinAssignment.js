const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_round_robin_assignment', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    index: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "system"
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'wf_task_round_robin_assignment',
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
