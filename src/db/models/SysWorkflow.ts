import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { sys_difficulty_level, sys_difficulty_levelId } from './SysDifficultyLevel';
import type { sys_priority_list, sys_priority_listId } from './SysPriorityList';
import type { sys_workflow_task, sys_workflow_taskId } from './SysWorkflowTask';
import type { sys_workflow_type, sys_workflow_typeId } from './SysWorkflowType';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface sys_workflowAttributes {
  id: number;
  co_info_id?: number;
  tax_type_id?: number;
  sys_workflow_type_id: number;
  assignment_type?: string;
  name: string;
  description?: string;
  sys_difficulty_level_id?: number;
  sys_priority_list_id?: number;
  company_followup_enabled: number;
  company_followup_days: number;
  company_due_date_enabled: number;
  company_due_date_days: number;
  agency_due_date_enabled: number;
  agency_due_date_days: number;
  created_at?: Date;
  updated_at?: Date;
  parent?: number;
  auto_letters_option: number;
  cause_of_workflow_option: number;
  corrective_action_option: number;
  account_agency_letter_option: number;
}

export type sys_workflowPk = "id";
export type sys_workflowId = sys_workflow[sys_workflowPk];
export type sys_workflowOptionalAttributes = "id" | "co_info_id" | "tax_type_id" | "assignment_type" | "description" | "sys_difficulty_level_id" | "sys_priority_list_id" | "company_followup_enabled" | "company_followup_days" | "company_due_date_enabled" | "company_due_date_days" | "agency_due_date_enabled" | "agency_due_date_days" | "created_at" | "updated_at" | "parent" | "auto_letters_option" | "cause_of_workflow_option" | "corrective_action_option" | "account_agency_letter_option";
export type sys_workflowCreationAttributes = Optional<sys_workflowAttributes, sys_workflowOptionalAttributes>;

export class sys_workflow extends Model<sys_workflowAttributes, sys_workflowCreationAttributes> implements sys_workflowAttributes {
  id!: number;
  co_info_id?: number;
  tax_type_id?: number;
  sys_workflow_type_id!: number;
  assignment_type?: string;
  name!: string;
  description?: string;
  sys_difficulty_level_id?: number;
  sys_priority_list_id?: number;
  company_followup_enabled!: number;
  company_followup_days!: number;
  company_due_date_enabled!: number;
  company_due_date_days!: number;
  agency_due_date_enabled!: number;
  agency_due_date_days!: number;
  created_at?: Date;
  updated_at?: Date;
  parent?: number;
  auto_letters_option!: number;
  cause_of_workflow_option!: number;
  corrective_action_option!: number;
  account_agency_letter_option!: number;

  // sys_workflow belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // sys_workflow belongsTo sys_difficulty_level via sys_difficulty_level_id
  sys_difficulty_level!: sys_difficulty_level;
  getSys_difficulty_level!: Sequelize.BelongsToGetAssociationMixin<sys_difficulty_level>;
  setSys_difficulty_level!: Sequelize.BelongsToSetAssociationMixin<sys_difficulty_level, sys_difficulty_levelId>;
  createSys_difficulty_level!: Sequelize.BelongsToCreateAssociationMixin<sys_difficulty_level>;
  // sys_workflow belongsTo sys_priority_list via sys_priority_list_id
  sys_priority_list!: sys_priority_list;
  getSys_priority_list!: Sequelize.BelongsToGetAssociationMixin<sys_priority_list>;
  setSys_priority_list!: Sequelize.BelongsToSetAssociationMixin<sys_priority_list, sys_priority_listId>;
  createSys_priority_list!: Sequelize.BelongsToCreateAssociationMixin<sys_priority_list>;
  // sys_workflow hasMany agency_form_number via notice_type
  agency_form_numbers!: agency_form_number[];
  getAgency_form_numbers!: Sequelize.HasManyGetAssociationsMixin<agency_form_number>;
  setAgency_form_numbers!: Sequelize.HasManySetAssociationsMixin<agency_form_number, agency_form_numberId>;
  addAgency_form_number!: Sequelize.HasManyAddAssociationMixin<agency_form_number, agency_form_numberId>;
  addAgency_form_numbers!: Sequelize.HasManyAddAssociationsMixin<agency_form_number, agency_form_numberId>;
  createAgency_form_number!: Sequelize.HasManyCreateAssociationMixin<agency_form_number>;
  removeAgency_form_number!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number, agency_form_numberId>;
  removeAgency_form_numbers!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number, agency_form_numberId>;
  hasAgency_form_number!: Sequelize.HasManyHasAssociationMixin<agency_form_number, agency_form_numberId>;
  hasAgency_form_numbers!: Sequelize.HasManyHasAssociationsMixin<agency_form_number, agency_form_numberId>;
  countAgency_form_numbers!: Sequelize.HasManyCountAssociationsMixin;
  // sys_workflow hasMany ocr_archived_document via notice_type_id
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
  // sys_workflow hasMany ocr_scanned_document via notice_type_id
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
  // sys_workflow hasMany sys_workflow_task via sys_workflow_id
  sys_workflow_tasks!: sys_workflow_task[];
  getSys_workflow_tasks!: Sequelize.HasManyGetAssociationsMixin<sys_workflow_task>;
  setSys_workflow_tasks!: Sequelize.HasManySetAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  addSys_workflow_task!: Sequelize.HasManyAddAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  addSys_workflow_tasks!: Sequelize.HasManyAddAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  createSys_workflow_task!: Sequelize.HasManyCreateAssociationMixin<sys_workflow_task>;
  removeSys_workflow_task!: Sequelize.HasManyRemoveAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  removeSys_workflow_tasks!: Sequelize.HasManyRemoveAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  hasSys_workflow_task!: Sequelize.HasManyHasAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  hasSys_workflow_tasks!: Sequelize.HasManyHasAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  countSys_workflow_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // sys_workflow hasMany wf_info via notice_type
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
  // sys_workflow hasMany wf_info_new via notice_type
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
  // sys_workflow belongsTo sys_workflow_type via sys_workflow_type_id
  sys_workflow_type!: sys_workflow_type;
  getSys_workflow_type!: Sequelize.BelongsToGetAssociationMixin<sys_workflow_type>;
  setSys_workflow_type!: Sequelize.BelongsToSetAssociationMixin<sys_workflow_type, sys_workflow_typeId>;
  createSys_workflow_type!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_workflow {
    return sequelize.define('sys_workflow', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_workflow_type',
        key: 'id'
      }
    },
    assignment_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "workflow-manager"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sys_difficulty_level_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_difficulty_level',
        key: 'id'
      }
    },
    sys_priority_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_priority_list',
        key: 'id'
      }
    },
    company_followup_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_followup_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_due_date_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_due_date_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    agency_due_date_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    agency_due_date_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    auto_letters_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cause_of_workflow_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    corrective_action_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    account_agency_letter_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'sys_workflow',
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
        name: "sys_workflow_sys_workflow_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_type_id" },
        ]
      },
      {
        name: "sys_workflow_sys_difficulty_level_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_difficulty_level_id" },
        ]
      },
      {
        name: "sys_workflow_sys_priority_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_priority_list_id" },
        ]
      },
      {
        name: "sys_workflow_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof sys_workflow;
  }
}
