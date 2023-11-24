import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_tbl_account_data_detailAttributes {
  id: number;
  account_id?: string;
  ants_client_id?: number;
  name?: string;
  co_info_id: number;
  maxid?: number;
  qty: number;
}

export type TEMP_tbl_account_data_detailPk = "id";
export type TEMP_tbl_account_data_detailId = TEMP_tbl_account_data_detail[TEMP_tbl_account_data_detailPk];
export type TEMP_tbl_account_data_detailOptionalAttributes = "id" | "account_id" | "ants_client_id" | "name" | "maxid" | "qty";
export type TEMP_tbl_account_data_detailCreationAttributes = Optional<TEMP_tbl_account_data_detailAttributes, TEMP_tbl_account_data_detailOptionalAttributes>;

export class TEMP_tbl_account_data_detail extends Model<TEMP_tbl_account_data_detailAttributes, TEMP_tbl_account_data_detailCreationAttributes> implements TEMP_tbl_account_data_detailAttributes {
  id!: number;
  account_id?: string;
  ants_client_id?: number;
  name?: string;
  co_info_id!: number;
  maxid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_tbl_account_data_detail {
    return sequelize.define('TEMP_tbl_account_data_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ants_client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_account_data_details',
    timestamps: false
  }) as typeof TEMP_tbl_account_data_detail;
  }
}
