const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_alert', {
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    notice_manager: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    alert_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'wf_alerts',
    timestamps: true,
    indexes: [
      {
        name: "unique_alert",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
          { name: "co_info_id" },
          { name: "alert_type" },
        ]
      },
    ]
  });
};
