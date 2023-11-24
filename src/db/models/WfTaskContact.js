const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_contact', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_contact_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    call_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    call_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration_seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    call_note_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_to_call: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_contacts',
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
        name: "wf_task_contacts_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_contacts_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
