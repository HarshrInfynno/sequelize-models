const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('security_password_reset', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'security_password_resets',
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
        name: "security_password_resets_token_index",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
