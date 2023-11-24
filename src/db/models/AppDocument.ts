import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_documentAttributes {
  id: number;
  co_info_id?: number;
  account_info_id?: number;
  workflow_id?: number;
  workflow_type?: string;
  type?: string;
  name?: string;
  description?: string;
  filename?: string;
  extension?: string;
  mime_type?: string;
  size?: number;
  path?: string;
  hyperlink?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  ants_attachment_id?: number;
}

export type app_documentPk = "id";
export type app_documentId = app_document[app_documentPk];
export type app_documentOptionalAttributes = "id" | "co_info_id" | "account_info_id" | "workflow_id" | "workflow_type" | "type" | "name" | "description" | "filename" | "extension" | "mime_type" | "size" | "path" | "hyperlink" | "created_by" | "updated_by" | "created_at" | "updated_at" | "ants_attachment_id";
export type app_documentCreationAttributes = Optional<app_documentAttributes, app_documentOptionalAttributes>;

export class app_document extends Model<app_documentAttributes, app_documentCreationAttributes> implements app_documentAttributes {
  id!: number;
  co_info_id?: number;
  account_info_id?: number;
  workflow_id?: number;
  workflow_type?: string;
  type?: string;
  name?: string;
  description?: string;
  filename?: string;
  extension?: string;
  mime_type?: string;
  size?: number;
  path?: string;
  hyperlink?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  ants_attachment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_document {
    return sequelize.define('app_document', {
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
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mime_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    size: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    hyperlink: {
      type: DataTypes.STRING(2000),
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
    ants_attachment_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'app_documents',
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
  }) as typeof app_document;
  }
}
