import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_tbl_sys_tax_service_level_listAttributes {
  id: number;
  name: string;
  co_info_id?: number;
  maxid?: number;
  qty: number;
}

export type TEMP_tbl_sys_tax_service_level_listPk = "id";
export type TEMP_tbl_sys_tax_service_level_listId = TEMP_tbl_sys_tax_service_level_list[TEMP_tbl_sys_tax_service_level_listPk];
export type TEMP_tbl_sys_tax_service_level_listOptionalAttributes = "id" | "co_info_id" | "maxid" | "qty";
export type TEMP_tbl_sys_tax_service_level_listCreationAttributes = Optional<TEMP_tbl_sys_tax_service_level_listAttributes, TEMP_tbl_sys_tax_service_level_listOptionalAttributes>;

export class TEMP_tbl_sys_tax_service_level_list extends Model<TEMP_tbl_sys_tax_service_level_listAttributes, TEMP_tbl_sys_tax_service_level_listCreationAttributes> implements TEMP_tbl_sys_tax_service_level_listAttributes {
  id!: number;
  name!: string;
  co_info_id?: number;
  maxid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_tbl_sys_tax_service_level_list {
    return sequelize.define('TEMP_tbl_sys_tax_service_level_list', {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    maxid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_sys_tax_service_level_list',
    timestamps: false
  }) as typeof TEMP_tbl_sys_tax_service_level_list;
  }
}
