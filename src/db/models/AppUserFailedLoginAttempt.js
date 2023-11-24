const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_user_failed_login_attempt', {
    id: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'app_user_failed_login_attempts',
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
