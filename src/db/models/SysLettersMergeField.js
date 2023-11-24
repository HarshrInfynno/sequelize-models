const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_letters_merge_field', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    table_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    field_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_letters_merge_fields',
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
