import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_communicationAttributes {
  id: number;
  workflow_type: string;
  workflow_info_id: number;
  type: string;
  resource_id: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_communicationPk = "id";
export type wf_communicationId = wf_communication[wf_communicationPk];
export type wf_communicationOptionalAttributes = "id" | "updated_by" | "created_at" | "updated_at";
export type wf_communicationCreationAttributes = Optional<wf_communicationAttributes, wf_communicationOptionalAttributes>;

export class wf_communication extends Model<wf_communicationAttributes, wf_communicationCreationAttributes> implements wf_communicationAttributes {
  id!: number;
  workflow_type!: string;
  workflow_info_id!: number;
  type!: string;
  resource_id!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_communication {
    return sequelize.define('wf_communication', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    tableName: 'wf_communications',
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
  }) as typeof wf_communication;
  }
}
