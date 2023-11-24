import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_account_contact_detailAttributes {
  id: number;
  fax_number?: string;
  co_info_id?: number;
  account_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  primary_phone?: string;
  maxid?: number;
  minid?: number;
  qty: number;
}

export type TEMP_account_contact_detailPk = "id";
export type TEMP_account_contact_detailId = TEMP_account_contact_detail[TEMP_account_contact_detailPk];
export type TEMP_account_contact_detailOptionalAttributes = "id" | "fax_number" | "co_info_id" | "account_id" | "first_name" | "last_name" | "email" | "primary_phone" | "maxid" | "minid" | "qty";
export type TEMP_account_contact_detailCreationAttributes = Optional<TEMP_account_contact_detailAttributes, TEMP_account_contact_detailOptionalAttributes>;

export class TEMP_account_contact_detail extends Model<TEMP_account_contact_detailAttributes, TEMP_account_contact_detailCreationAttributes> implements TEMP_account_contact_detailAttributes {
  id!: number;
  fax_number?: string;
  co_info_id?: number;
  account_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  primary_phone?: string;
  maxid?: number;
  minid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_account_contact_detail {
    return sequelize.define('TEMP_account_contact_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    fax_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    minid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_account_contact_details',
    timestamps: false
  }) as typeof TEMP_account_contact_detail;
  }
}
