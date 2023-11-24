const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_letters_email_property', {
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
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Type = Workflow, sys_workflow_type.id"
    },
    subject_line: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'sys_letters_email_properties',
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
        name: "sys_letters_email_properties_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "sys_letters_email_properties_sys_workflow_type_id_index",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_type_id" },
        ]
      },
    ]
  });
};
