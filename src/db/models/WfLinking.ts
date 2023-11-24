import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_linkingAttributes {
  parent_wf_id: number;
  parent_wf_display_id: number;
  parent_workflow_type: string;
  child_wf_id: number;
  child_wf_display_id: number;
  child_workflow_type: string;
  created_by?: number;
  created_at?: Date;
}

export type wf_linkingPk = "parent_wf_id" | "child_wf_id";
export type wf_linkingId = wf_linking[wf_linkingPk];
export type wf_linkingOptionalAttributes = "created_by" | "created_at";
export type wf_linkingCreationAttributes = Optional<wf_linkingAttributes, wf_linkingOptionalAttributes>;

export class wf_linking extends Model<wf_linkingAttributes, wf_linkingCreationAttributes> implements wf_linkingAttributes {
  parent_wf_id!: number;
  parent_wf_display_id!: number;
  parent_workflow_type!: string;
  child_wf_id!: number;
  child_wf_display_id!: number;
  child_workflow_type!: string;
  created_by?: number;
  created_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_linking {
    return sequelize.define('wf_linking', {
    parent_wf_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_wf_display_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    parent_workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child_wf_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    child_wf_display_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    child_workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_linking',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parent_wf_id" },
          { name: "child_wf_id" },
        ]
      },
    ]
  }) as typeof wf_linking;
  }
}
