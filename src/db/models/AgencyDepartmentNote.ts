import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_department_noteAttributes {
  id: number;
  co_info_id?: number;
  agency_department_id: number;
  note: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_department_notePk = "id";
export type agency_department_noteId = agency_department_note[agency_department_notePk];
export type agency_department_noteOptionalAttributes = "id" | "co_info_id" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type agency_department_noteCreationAttributes = Optional<agency_department_noteAttributes, agency_department_noteOptionalAttributes>;

export class agency_department_note extends Model<agency_department_noteAttributes, agency_department_noteCreationAttributes> implements agency_department_noteAttributes {
  id!: number;
  co_info_id?: number;
  agency_department_id!: number;
  note!: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_department_note belongsTo agency_department via agency_department_id
  agency_department!: agency_department;
  getAgency_department!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_department!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_department!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // agency_department_note belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_department_note belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_department_note {
    return sequelize.define('agency_department_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_department',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_department_note',
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
        name: "agency_department_note_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_department_note_agency_department_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_department_id" },
        ]
      },
      {
        name: "agency_department_note_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_note_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof agency_department_note;
  }
}
