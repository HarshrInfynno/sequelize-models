const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_hidden_workflow', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    redirect_sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'co_hidden_workflows',
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
