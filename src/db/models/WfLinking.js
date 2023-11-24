const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_linking', {
    parent_wf_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_wf_display_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    parent_workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child_wf_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    child_wf_display_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    child_workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_linking',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parent_wf_id" },
          { name: "child_wf_id" },
        ]
      },
    ]
  });
};
