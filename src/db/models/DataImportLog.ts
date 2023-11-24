import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { data_import_chunk, data_import_chunkId } from './DataImportChunk';

export interface data_import_logAttributes {
  id: number;
  s3_urls?: object;
  meta?: object;
  status?: string;
  account_errors?: object;
  agency_errors?: object;
  contact_errors?: object;
  errors?: object;
  result?: object;
  created_by: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id: number;
  import_type: string;
}

export type data_import_logPk = "id";
export type data_import_logId = data_import_log[data_import_logPk];
export type data_import_logOptionalAttributes = "id" | "s3_urls" | "meta" | "status" | "account_errors" | "agency_errors" | "contact_errors" | "errors" | "result" | "created_at" | "updated_at";
export type data_import_logCreationAttributes = Optional<data_import_logAttributes, data_import_logOptionalAttributes>;

export class data_import_log extends Model<data_import_logAttributes, data_import_logCreationAttributes> implements data_import_logAttributes {
  id!: number;
  s3_urls?: object;
  meta?: object;
  status?: string;
  account_errors?: object;
  agency_errors?: object;
  contact_errors?: object;
  errors?: object;
  result?: object;
  created_by!: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id!: number;
  import_type!: string;

  // data_import_log hasMany data_import_chunk via data_import_logs_id
  data_import_chunks!: data_import_chunk[];
  getData_import_chunks!: Sequelize.HasManyGetAssociationsMixin<data_import_chunk>;
  setData_import_chunks!: Sequelize.HasManySetAssociationsMixin<data_import_chunk, data_import_chunkId>;
  addData_import_chunk!: Sequelize.HasManyAddAssociationMixin<data_import_chunk, data_import_chunkId>;
  addData_import_chunks!: Sequelize.HasManyAddAssociationsMixin<data_import_chunk, data_import_chunkId>;
  createData_import_chunk!: Sequelize.HasManyCreateAssociationMixin<data_import_chunk>;
  removeData_import_chunk!: Sequelize.HasManyRemoveAssociationMixin<data_import_chunk, data_import_chunkId>;
  removeData_import_chunks!: Sequelize.HasManyRemoveAssociationsMixin<data_import_chunk, data_import_chunkId>;
  hasData_import_chunk!: Sequelize.HasManyHasAssociationMixin<data_import_chunk, data_import_chunkId>;
  hasData_import_chunks!: Sequelize.HasManyHasAssociationsMixin<data_import_chunk, data_import_chunkId>;
  countData_import_chunks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof data_import_log {
    return sequelize.define('data_import_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    s3_urls: {
      type: DataTypes.JSON,
      allowNull: true
    },
    meta: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "PENDING"
    },
    account_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    agency_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    contact_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    result: {
      type: DataTypes.JSON,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    import_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'data_import_logs',
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
  }) as typeof data_import_log;
  }
}
