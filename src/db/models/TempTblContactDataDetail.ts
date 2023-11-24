import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_tbl_contact_data_detailAttributes {
  id: number;
  co_info_id?: number;
  account_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  primary_phone?: string;
  fax_number?: string;
  maxid?: number;
  minid?: number;
  qty: number;
}

export type TEMP_tbl_contact_data_detailPk = "id";
export type TEMP_tbl_contact_data_detailId = TEMP_tbl_contact_data_detail[TEMP_tbl_contact_data_detailPk];
export type TEMP_tbl_contact_data_detailOptionalAttributes = "id" | "co_info_id" | "account_id" | "first_name" | "last_name" | "email" | "contact_type" | "primary_phone" | "fax_number" | "maxid" | "minid" | "qty";
export type TEMP_tbl_contact_data_detailCreationAttributes = Optional<TEMP_tbl_contact_data_detailAttributes, TEMP_tbl_contact_data_detailOptionalAttributes>;

export class TEMP_tbl_contact_data_detail extends Model<TEMP_tbl_contact_data_detailAttributes, TEMP_tbl_contact_data_detailCreationAttributes> implements TEMP_tbl_contact_data_detailAttributes {
  id!: number;
  co_info_id?: number;
  account_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  primary_phone?: string;
  fax_number?: string;
  maxid?: number;
  minid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_tbl_contact_data_detail {
    return sequelize.define('TEMP_tbl_contact_data_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
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
    contact_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_number: {
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
    tableName: 'TEMP_tbl_contact_data_details',
    timestamps: false
  }) as typeof TEMP_tbl_contact_data_detail;
  }
}
