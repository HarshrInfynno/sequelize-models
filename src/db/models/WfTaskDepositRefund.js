const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_deposit_refund', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    wf_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    afc_expired_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afc_release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afc_deposit_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    released_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposited_by: {
      type: DataTypes.STRING(255),
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
    tableName: 'wf_task_deposit_refund',
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
        name: "wf_task_deposit_refund_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  });
};
