const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_letters_auto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    letter_option: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    letter_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'co_letters_auto',
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
