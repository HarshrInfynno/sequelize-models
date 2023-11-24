import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { data_import_log, data_import_logId } from './DataImportLog';

export interface data_import_chunkAttributes {
  id: number;
  data_import_logs_id?: number;
  s3_url?: string;
  type?: string;
  status?: 'PENDING' | 'PROCESSING' | 'PROCESSED';
  options?: object;
  result?: object;
  errors?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type data_import_chunkPk = "id";
export type data_import_chunkId = data_import_chunk[data_import_chunkPk];
export type data_import_chunkOptionalAttributes = "id" | "data_import_logs_id" | "s3_url" | "type" | "status" | "options" | "result" | "errors" | "created_at" | "updated_at";
export type data_import_chunkCreationAttributes = Optional<data_import_chunkAttributes, data_import_chunkOptionalAttributes>;

export class data_import_chunk extends Model<data_import_chunkAttributes, data_import_chunkCreationAttributes> implements data_import_chunkAttributes {
  id!: number;
  data_import_logs_id?: number;
  s3_url?: string;
  type?: string;
  status?: 'PENDING' | 'PROCESSING' | 'PROCESSED';
  options?: object;
  result?: object;
  errors?: object;
  created_at?: Date;
  updated_at?: Date;

  // data_import_chunk belongsTo data_import_log via data_import_logs_id
  data_import_log!: data_import_log;
  getData_import_log!: Sequelize.BelongsToGetAssociationMixin<data_import_log>;
  setData_import_log!: Sequelize.BelongsToSetAssociationMixin<data_import_log, data_import_logId>;
  createData_import_log!: Sequelize.BelongsToCreateAssociationMixin<data_import_log>;

  static initModel(sequelize: Sequelize.Sequelize): typeof data_import_chunk {
    return sequelize.define('data_import_chunk', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_import_logs_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'data_import_logs',
        key: 'id'
      }
    },
    s3_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('PENDING','PROCESSING','PROCESSED'),
      allowNull: true
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    result: {
      type: DataTypes.JSON,
      allowNull: true
    },
    errors: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'data_import_chunks',
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
        name: "data_import_chunks_data_import_logs_id",
        using: "BTREE",
        fields: [
          { name: "data_import_logs_id" },
        ]
      },
    ]
  }) as typeof data_import_chunk;
  }
}
