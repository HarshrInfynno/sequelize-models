const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mail_alert', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    wf_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wf_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    alert_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alert_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'mail_alert',
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
      {
        name: "ALERT_TIME_INDEX",
        using: "BTREE",
        fields: [
          { name: "alert_time" },
        ]
      },
    ]
  });
};
