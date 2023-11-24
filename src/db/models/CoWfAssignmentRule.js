const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_wf_assignment_rule', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    workflow_type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    rule_type_id_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rule_type_option_value_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rule_type_id_2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    rule_type_option_value_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rule_type_id_3: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    rule_type_option_value_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignment_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assignment_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    priority: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'co_wf_assignment_rule',
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
        name: "rule_type_id_1_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_1" },
        ]
      },
      {
        name: "rule_type_id_2_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_2" },
        ]
      },
      {
        name: "rule_type_id_3_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_3" },
        ]
      },
    ]
  });
};
