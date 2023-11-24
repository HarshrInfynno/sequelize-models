import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface temp_account_contact_infoAttributes {
  id: number;
  co_info_id: number;
  account_info: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  title?: string;
  primary_phone?: string;
  secondary_phone?: string;
  fax_number?: string;
  is_primary_contact?: string;
  location?: string;
  internal_id_1?: string;
  internal_id_2?: string;
}

export type temp_account_contact_infoPk = "id";
export type temp_account_contact_infoId = temp_account_contact_info[temp_account_contact_infoPk];
export type temp_account_contact_infoOptionalAttributes = "id" | "first_name" | "last_name" | "email" | "contact_type" | "title" | "primary_phone" | "secondary_phone" | "fax_number" | "is_primary_contact" | "location" | "internal_id_1" | "internal_id_2";
export type temp_account_contact_infoCreationAttributes = Optional<temp_account_contact_infoAttributes, temp_account_contact_infoOptionalAttributes>;

export class temp_account_contact_info extends Model<temp_account_contact_infoAttributes, temp_account_contact_infoCreationAttributes> implements temp_account_contact_infoAttributes {
  id!: number;
  co_info_id!: number;
  account_info!: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  title?: string;
  primary_phone?: string;
  secondary_phone?: string;
  fax_number?: string;
  is_primary_contact?: string;
  location?: string;
  internal_id_1?: string;
  internal_id_2?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof temp_account_contact_info {
    return sequelize.define('temp_account_contact_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secondary_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_primary_contact: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'temp_account_contact_info',
    timestamps: false,
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
  }) as typeof temp_account_contact_info;
  }
}
