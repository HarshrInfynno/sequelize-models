import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_account_info_detailAttributes {
  id: number;
  account_id?: string;
  co_info_id: number;
  maxid?: number;
  minid?: number;
  qty: number;
}

export type TEMP_account_info_detailPk = "id";
export type TEMP_account_info_detailId = TEMP_account_info_detail[TEMP_account_info_detailPk];
export type TEMP_account_info_detailOptionalAttributes = "id" | "account_id" | "maxid" | "minid" | "qty";
export type TEMP_account_info_detailCreationAttributes = Optional<TEMP_account_info_detailAttributes, TEMP_account_info_detailOptionalAttributes>;

export class TEMP_account_info_detail extends Model<TEMP_account_info_detailAttributes, TEMP_account_info_detailCreationAttributes> implements TEMP_account_info_detailAttributes {
  id!: number;
  account_id?: string;
  co_info_id!: number;
  maxid?: number;
  minid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_account_info_detail {
    return sequelize.define('TEMP_account_info_detail', {
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
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    tableName: 'TEMP_account_info_details',
    timestamps: false
  }) as typeof TEMP_account_info_detail;
  }
}
