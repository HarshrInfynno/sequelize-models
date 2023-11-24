import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface poa_infoAttributes {
  id: number;
  co_info_id?: number;
  description?: string;
  has_fax?: number;
  has_email?: number;
  has_upload?: number;
  has_mail?: number;
  fax?: string;
  email?: string;
  upload_website?: string;
  help_website?: string;
  required_to_file?: number;
  required_to_contact?: number;
  address_description?: string;
  address?: string;
  city?: string;
  state?: number;
  zipcode?: string;
  phone?: string;
  used_for?: string;
  agency_type?: string;
  issuing_agency?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type poa_infoPk = "id";
export type poa_infoId = poa_info[poa_infoPk];
export type poa_infoOptionalAttributes = "id" | "co_info_id" | "description" | "has_fax" | "has_email" | "has_upload" | "has_mail" | "fax" | "email" | "upload_website" | "help_website" | "required_to_file" | "required_to_contact" | "address_description" | "address" | "city" | "state" | "zipcode" | "phone" | "used_for" | "agency_type" | "issuing_agency" | "created_at" | "updated_at";
export type poa_infoCreationAttributes = Optional<poa_infoAttributes, poa_infoOptionalAttributes>;

export class poa_info extends Model<poa_infoAttributes, poa_infoCreationAttributes> implements poa_infoAttributes {
  id!: number;
  co_info_id?: number;
  description?: string;
  has_fax?: number;
  has_email?: number;
  has_upload?: number;
  has_mail?: number;
  fax?: string;
  email?: string;
  upload_website?: string;
  help_website?: string;
  required_to_file?: number;
  required_to_contact?: number;
  address_description?: string;
  address?: string;
  city?: string;
  state?: number;
  zipcode?: string;
  phone?: string;
  used_for?: string;
  agency_type?: string;
  issuing_agency?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof poa_info {
    return sequelize.define('poa_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    has_fax: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_email: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_upload: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_mail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    upload_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    help_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    required_to_file: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    required_to_contact: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    address_description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    issuing_agency: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'poa_info',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
    ]
  }) as typeof poa_info;
  }
}
