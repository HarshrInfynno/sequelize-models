import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_city_noteAttributes {
  id: number;
  co_info_id?: number;
  agency_city_id: number;
  note: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_city_notePk = "id";
export type agency_city_noteId = agency_city_note[agency_city_notePk];
export type agency_city_noteOptionalAttributes = "id" | "co_info_id" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type agency_city_noteCreationAttributes = Optional<agency_city_noteAttributes, agency_city_noteOptionalAttributes>;

export class agency_city_note extends Model<agency_city_noteAttributes, agency_city_noteCreationAttributes> implements agency_city_noteAttributes {
  id!: number;
  co_info_id?: number;
  agency_city_id!: number;
  note!: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_city_note belongsTo agency_city via agency_city_id
  agency_city!: agency_city;
  getAgency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // agency_city_note belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_city_note belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_city_note {
    return sequelize.define('agency_city_note', {
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
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_city',
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
    tableName: 'agency_city_note',
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
        name: "agency_city_note_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_city_note_agency_city_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_city_id" },
        ]
      },
      {
        name: "agency_city_note_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_city_note_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof agency_city_note;
  }
}
