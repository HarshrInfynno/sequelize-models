import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface sys_difficulty_levelAttributes {
  id: number;
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_difficulty_levelPk = "id";
export type sys_difficulty_levelId = sys_difficulty_level[sys_difficulty_levelPk];
export type sys_difficulty_levelOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type sys_difficulty_levelCreationAttributes = Optional<sys_difficulty_levelAttributes, sys_difficulty_levelOptionalAttributes>;

export class sys_difficulty_level extends Model<sys_difficulty_levelAttributes, sys_difficulty_levelCreationAttributes> implements sys_difficulty_levelAttributes {
  id!: number;
  name!: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;

  // sys_difficulty_level hasMany sys_workflow via sys_difficulty_level_id
  sys_workflows!: sys_workflow[];
  getSys_workflows!: Sequelize.HasManyGetAssociationsMixin<sys_workflow>;
  setSys_workflows!: Sequelize.HasManySetAssociationsMixin<sys_workflow, sys_workflowId>;
  addSys_workflow!: Sequelize.HasManyAddAssociationMixin<sys_workflow, sys_workflowId>;
  addSys_workflows!: Sequelize.HasManyAddAssociationsMixin<sys_workflow, sys_workflowId>;
  createSys_workflow!: Sequelize.HasManyCreateAssociationMixin<sys_workflow>;
  removeSys_workflow!: Sequelize.HasManyRemoveAssociationMixin<sys_workflow, sys_workflowId>;
  removeSys_workflows!: Sequelize.HasManyRemoveAssociationsMixin<sys_workflow, sys_workflowId>;
  hasSys_workflow!: Sequelize.HasManyHasAssociationMixin<sys_workflow, sys_workflowId>;
  hasSys_workflows!: Sequelize.HasManyHasAssociationsMixin<sys_workflow, sys_workflowId>;
  countSys_workflows!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_difficulty_level {
    return sequelize.define('sys_difficulty_level', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_difficulty_level',
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
  }) as typeof sys_difficulty_level;
  }
}
