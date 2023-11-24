const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_user_session', {
    id: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    shadow_app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
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
    },
    from_desktop_utility: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'app_user_sessions',
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
