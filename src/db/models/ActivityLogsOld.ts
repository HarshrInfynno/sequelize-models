import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface activity_logs_oldAttributes {
  id: number;
  activity_type: string;
  activity_module: string;
  activity_model: string;
  activity_model_id: number;
  activity_parent_module?: string;
  activity_parent_model?: string;
  activity_parent_model_id?: number;
  old?: object;
  new?: object;
  activity_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type activity_logs_oldPk = "id";
export type activity_logs_oldId = activity_logs_old[activity_logs_oldPk];
export type activity_logs_oldOptionalAttributes = "id" | "activity_parent_module" | "activity_parent_model" | "activity_parent_model_id" | "old" | "new" | "activity_by" | "created_at" | "updated_at";
export type activity_logs_oldCreationAttributes = Optional<activity_logs_oldAttributes, activity_logs_oldOptionalAttributes>;

export class activity_logs_old extends Model<activity_logs_oldAttributes, activity_logs_oldCreationAttributes> implements activity_logs_oldAttributes {
  id!: number;
  activity_type!: string;
  activity_module!: string;
  activity_model!: string;
  activity_model_id!: number;
  activity_parent_module?: string;
  activity_parent_model?: string;
  activity_parent_model_id?: number;
  old?: object;
  new?: object;
  activity_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof activity_logs_old {
    return sequelize.define('activity_logs_old', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    activity_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_module: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_model_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    activity_parent_module: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_parent_model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_parent_model_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    old: {
      type: DataTypes.JSON,
      allowNull: true
    },
    new: {
      type: DataTypes.JSON,
      allowNull: true
    },
    activity_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'activity_logs_old',
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
  }) as typeof activity_logs_old;
  }
}
