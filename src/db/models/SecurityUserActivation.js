const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('security_user_activation', {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'security_user_activations',
    timestamps: true,
    indexes: [
      {
        name: "security_user_activations_token_index",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
