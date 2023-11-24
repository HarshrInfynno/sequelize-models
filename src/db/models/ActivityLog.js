const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activity_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    activity_modal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_modal_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_screen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    old: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    new: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'activity_logs',
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
