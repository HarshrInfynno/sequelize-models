import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_emailAttributes {
  id: number;
  co_info_id: number;
  account_info_id?: number;
  workflow_info_id?: number;
  letter_id?: number;
  letter_type?: string;
  sent_by: string;
  sent_to: string;
  email_by?: string;
  email_to?: string;
  email_cc?: string;
  email_subject?: string;
  email_body?: string;
  email_attachments?: string;
  created_by: number;
  updated_by?: number;
  entered_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  internet_message_id?: string;
  conversation_id?: string;
  entry_type?: string;
}

export type co_emailPk = "id";
export type co_emailId = co_email[co_emailPk];
export type co_emailOptionalAttributes = "id" | "account_info_id" | "workflow_info_id" | "letter_id" | "letter_type" | "email_by" | "email_to" | "email_cc" | "email_subject" | "email_body" | "email_attachments" | "updated_by" | "entered_date" | "created_at" | "updated_at" | "internet_message_id" | "conversation_id" | "entry_type";
export type co_emailCreationAttributes = Optional<co_emailAttributes, co_emailOptionalAttributes>;

export class co_email extends Model<co_emailAttributes, co_emailCreationAttributes> implements co_emailAttributes {
  id!: number;
  co_info_id!: number;
  account_info_id?: number;
  workflow_info_id?: number;
  letter_id?: number;
  letter_type?: string;
  sent_by!: string;
  sent_to!: string;
  email_by?: string;
  email_to?: string;
  email_cc?: string;
  email_subject?: string;
  email_body?: string;
  email_attachments?: string;
  created_by!: number;
  updated_by?: number;
  entered_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  internet_message_id?: string;
  conversation_id?: string;
  entry_type?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_email {
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
  }) as typeof co_email;
  }
}
