const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_task_definition', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sys_task_definition_slug_unique"
    },
    days_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    default: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sys_workflow_type_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_options: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'sys_task_definition',
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
        name: "sys_task_definition_slug_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
