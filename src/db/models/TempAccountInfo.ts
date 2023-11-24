import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface temp_account_infoAttributes {
  id: number;
  co_info_id?: number;
  account_id?: string;
  name?: string;
  dba?: string;
  phone?: string;
  fax?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  fed_id?: string;
  start_date?: string;
  end_date?: string;
  csr?: string;
  tax_service_level?: string;
  tax_service_start_date?: string;
  tax_service_end_date?: string;
  account_location?: string;
  country?: string;
  internal_id_1?: string;
  internal_id_2?: string;
}

export type temp_account_infoPk = "id";
export type temp_account_infoId = temp_account_info[temp_account_infoPk];
export type temp_account_infoOptionalAttributes = "id" | "co_info_id" | "account_id" | "name" | "dba" | "phone" | "fax" | "address_1" | "address_2" | "city" | "state" | "zip" | "fed_id" | "start_date" | "end_date" | "csr" | "tax_service_level" | "tax_service_start_date" | "tax_service_end_date" | "account_location" | "country" | "internal_id_1" | "internal_id_2";
export type temp_account_infoCreationAttributes = Optional<temp_account_infoAttributes, temp_account_infoOptionalAttributes>;

export class temp_account_info extends Model<temp_account_infoAttributes, temp_account_infoCreationAttributes> implements temp_account_infoAttributes {
  id!: number;
  co_info_id?: number;
  account_id?: string;
  name?: string;
  dba?: string;
  phone?: string;
  fax?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  fed_id?: string;
  start_date?: string;
  end_date?: string;
  csr?: string;
  tax_service_level?: string;
  tax_service_start_date?: string;
  tax_service_end_date?: string;
  account_location?: string;
  country?: string;
  internal_id_1?: string;
  internal_id_2?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof temp_account_info {
    return sequelize.define('temp_account_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dba: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fed_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    csr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_end_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
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
    tableName: 'temp_account_info',
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
  }) as typeof temp_account_info;
  }
}
