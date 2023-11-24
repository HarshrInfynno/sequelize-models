const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_email', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sent_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sent_to: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_cc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    entered_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    internet_message_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversation_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entry_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'co_emails',
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
