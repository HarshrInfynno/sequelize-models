import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface sys_workflow_typeAttributes {
  id: number;
  name: string;
  description?: string;
  slug?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_workflow_typePk = "id";
export type sys_workflow_typeId = sys_workflow_type[sys_workflow_typePk];
export type sys_workflow_typeOptionalAttributes = "id" | "description" | "slug" | "created_at" | "updated_at";
export type sys_workflow_typeCreationAttributes = Optional<sys_workflow_typeAttributes, sys_workflow_typeOptionalAttributes>;

export class sys_workflow_type extends Model<sys_workflow_typeAttributes, sys_workflow_typeCreationAttributes> implements sys_workflow_typeAttributes {
  id!: number;
  name!: string;
  description?: string;
  slug?: string;
  created_at?: Date;
  updated_at?: Date;

  // sys_workflow_type hasMany sys_workflow via sys_workflow_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_workflow_type {
    return sequelize.define('sys_workflow_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
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
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sys_workflow_type_slug_unique"
    }
  }, {
    tableName: 'sys_workflow_type',
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
        name: "sys_workflow_type_slug_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  }) as typeof sys_workflow_type;
  }
}
