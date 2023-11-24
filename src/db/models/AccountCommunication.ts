import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';

export interface account_communicationAttributes {
  id: number;
  account_info_id: number;
  type: string;
  resource_id: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_communicationPk = "id";
export type account_communicationId = account_communication[account_communicationPk];
export type account_communicationOptionalAttributes = "id" | "updated_by" | "created_at" | "updated_at";
export type account_communicationCreationAttributes = Optional<account_communicationAttributes, account_communicationOptionalAttributes>;

export class account_communication extends Model<account_communicationAttributes, account_communicationCreationAttributes> implements account_communicationAttributes {
  id!: number;
  account_info_id!: number;
  type!: string;
  resource_id!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // account_communication belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_communication {
    return sequelize.define('account_communication', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resource_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_communications',
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
        name: "account_info_id_index",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "resource_id_index",
        using: "BTREE",
        fields: [
          { name: "resource_id" },
        ]
      },
    ]
  }) as typeof account_communication;
  }
}
