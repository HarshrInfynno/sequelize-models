import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_deposit_frequency_list, agency_deposit_frequency_listId } from './AgencyDepositFrequencyList';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface account_agencyAttributes {
  id: number;
  parent?: number;
  account_info_id: number;
  agency_type?: string;
  agency_info_id: number;
  agency_local?: number;
  agency_city?: number;
  ein?: string;
  agency_deposit_frequency_list_id?: number;
  deposit_method?: string;
  deposit_made_to?: string;
  account_number?: string;
  withholding_id?: string;
  taxpayer_id?: string;
  unemployment_id?: string;
  start_date?: string;
  end_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;
  account_id?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  sales_use_id?: string;
  use_id?: string;
  country?: number;
}

export type account_agencyPk = "id";
export type account_agencyId = account_agency[account_agencyPk];
export type account_agencyOptionalAttributes = "id" | "parent" | "agency_type" | "agency_local" | "agency_city" | "ein" | "agency_deposit_frequency_list_id" | "deposit_method" | "deposit_made_to" | "account_number" | "withholding_id" | "taxpayer_id" | "unemployment_id" | "start_date" | "end_date" | "created_by" | "updated_by" | "created_at" | "updated_at" | "co_info_id" | "account_id" | "internal_id_1" | "internal_id_2" | "sales_use_id" | "use_id" | "country";
export type account_agencyCreationAttributes = Optional<account_agencyAttributes, account_agencyOptionalAttributes>;

export class account_agency extends Model<account_agencyAttributes, account_agencyCreationAttributes> implements account_agencyAttributes {
  id!: number;
  parent?: number;
  account_info_id!: number;
  agency_type?: string;
  agency_info_id!: number;
  agency_local?: number;
  agency_city?: number;
  ein?: string;
  agency_deposit_frequency_list_id?: number;
  deposit_method?: string;
  deposit_made_to?: string;
  account_number?: string;
  withholding_id?: string;
  taxpayer_id?: string;
  unemployment_id?: string;
  start_date?: string;
  end_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;
  account_id?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  sales_use_id?: string;
  use_id?: string;
  country?: number;

  // account_agency hasMany ocr_archived_document via account_agency_id
  ocr_archived_documents!: ocr_archived_document[];
  getOcr_archived_documents!: Sequelize.HasManyGetAssociationsMixin<ocr_archived_document>;
  setOcr_archived_documents!: Sequelize.HasManySetAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  addOcr_archived_document!: Sequelize.HasManyAddAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  addOcr_archived_documents!: Sequelize.HasManyAddAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  createOcr_archived_document!: Sequelize.HasManyCreateAssociationMixin<ocr_archived_document>;
  removeOcr_archived_document!: Sequelize.HasManyRemoveAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  removeOcr_archived_documents!: Sequelize.HasManyRemoveAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  hasOcr_archived_document!: Sequelize.HasManyHasAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  hasOcr_archived_documents!: Sequelize.HasManyHasAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  countOcr_archived_documents!: Sequelize.HasManyCountAssociationsMixin;
  // account_agency hasMany ocr_scanned_document via account_agency_id
  ocr_scanned_documents!: ocr_scanned_document[];
  getOcr_scanned_documents!: Sequelize.HasManyGetAssociationsMixin<ocr_scanned_document>;
  setOcr_scanned_documents!: Sequelize.HasManySetAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  addOcr_scanned_document!: Sequelize.HasManyAddAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  addOcr_scanned_documents!: Sequelize.HasManyAddAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  createOcr_scanned_document!: Sequelize.HasManyCreateAssociationMixin<ocr_scanned_document>;
  removeOcr_scanned_document!: Sequelize.HasManyRemoveAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  removeOcr_scanned_documents!: Sequelize.HasManyRemoveAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  hasOcr_scanned_document!: Sequelize.HasManyHasAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  hasOcr_scanned_documents!: Sequelize.HasManyHasAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  countOcr_scanned_documents!: Sequelize.HasManyCountAssociationsMixin;
  // account_agency hasMany wf_info via issuing_agency
  wf_infos!: wf_info[];
  getWf_infos!: Sequelize.HasManyGetAssociationsMixin<wf_info>;
  setWf_infos!: Sequelize.HasManySetAssociationsMixin<wf_info, wf_infoId>;
  addWf_info!: Sequelize.HasManyAddAssociationMixin<wf_info, wf_infoId>;
  addWf_infos!: Sequelize.HasManyAddAssociationsMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.HasManyCreateAssociationMixin<wf_info>;
  removeWf_info!: Sequelize.HasManyRemoveAssociationMixin<wf_info, wf_infoId>;
  removeWf_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_info, wf_infoId>;
  hasWf_info!: Sequelize.HasManyHasAssociationMixin<wf_info, wf_infoId>;
  hasWf_infos!: Sequelize.HasManyHasAssociationsMixin<wf_info, wf_infoId>;
  countWf_infos!: Sequelize.HasManyCountAssociationsMixin;
  // account_agency hasMany wf_info_new via issuing_agency
  wf_info_news!: wf_info_new[];
  getWf_info_news!: Sequelize.HasManyGetAssociationsMixin<wf_info_new>;
  setWf_info_news!: Sequelize.HasManySetAssociationsMixin<wf_info_new, wf_info_newId>;
  addWf_info_new!: Sequelize.HasManyAddAssociationMixin<wf_info_new, wf_info_newId>;
  addWf_info_news!: Sequelize.HasManyAddAssociationsMixin<wf_info_new, wf_info_newId>;
  createWf_info_new!: Sequelize.HasManyCreateAssociationMixin<wf_info_new>;
  removeWf_info_new!: Sequelize.HasManyRemoveAssociationMixin<wf_info_new, wf_info_newId>;
  removeWf_info_news!: Sequelize.HasManyRemoveAssociationsMixin<wf_info_new, wf_info_newId>;
  hasWf_info_new!: Sequelize.HasManyHasAssociationMixin<wf_info_new, wf_info_newId>;
  hasWf_info_news!: Sequelize.HasManyHasAssociationsMixin<wf_info_new, wf_info_newId>;
  countWf_info_news!: Sequelize.HasManyCountAssociationsMixin;
  // account_agency belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // account_agency belongsTo agency_city via agency_city
  agency_city_agency_city!: agency_city;
  getAgency_city_agency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city_agency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city_agency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // account_agency belongsTo agency_deposit_frequency_list via agency_deposit_frequency_list_id
  agency_deposit_frequency_list!: agency_deposit_frequency_list;
  getAgency_deposit_frequency_list!: Sequelize.BelongsToGetAssociationMixin<agency_deposit_frequency_list>;
  setAgency_deposit_frequency_list!: Sequelize.BelongsToSetAssociationMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  createAgency_deposit_frequency_list!: Sequelize.BelongsToCreateAssociationMixin<agency_deposit_frequency_list>;
  // account_agency belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // account_agency belongsTo agency_local via agency_local
  agency_local_agency_local!: agency_local;
  getAgency_local_agency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local_agency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local_agency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // account_agency belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_agency belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_agency {
    return sequelize.define('account_agency', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "department"
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    agency_local: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local',
        key: 'id'
      }
    },
    agency_city: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_city',
        key: 'id'
      }
    },
    ein: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agency_deposit_frequency_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_deposit_frequency_list',
        key: 'id'
      }
    },
    deposit_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deposit_made_to: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    account_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    withholding_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    taxpayer_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unemployment_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    internal_id_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sales_use_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    use_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    tableName: 'account_agency',
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
        name: "account_agency_agency_deposit_frequency_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_deposit_frequency_list_id" },
        ]
      },
      {
        name: "account_agency_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_agency_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "account_agency_agency_city",
        using: "BTREE",
        fields: [
          { name: "agency_city" },
        ]
      },
      {
        name: "account_agency_agency_local",
        using: "BTREE",
        fields: [
          { name: "agency_local" },
        ]
      },
      {
        name: "account_agency_account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "account_agency_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  }) as typeof account_agency;
  }
}
