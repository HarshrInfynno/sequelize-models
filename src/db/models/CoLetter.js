const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    sys_letters_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
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
      allowNull: true
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
    tableName: 'co_letters',
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
        name: "co_letters_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "co_letters_sys_letters_id_index",
        using: "BTREE",
        fields: [
          { name: "sys_letters_id" },
        ]
      },
    ]
  });
};
