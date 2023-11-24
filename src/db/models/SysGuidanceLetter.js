const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_guidance_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sys_guidance_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Reference : sys_guidance_info"
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : co_info"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recipient: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    used_for: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    letter_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'sys_guidance_letters',
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
