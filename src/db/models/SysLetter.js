const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_letter', {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Type = Workflow, sys_workflow_type.id"
    },
    filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type = Workflow, app_usage_types.id"
    },
    show_in_list: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    recipient: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    html_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_service_provider: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    old_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    tableName: 'sys_letters',
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
