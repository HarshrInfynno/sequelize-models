import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mastertax_import_logAttributes {
  id: number;
  co_info_id: number;
  data_import_logs_id: number;
  type: string;
  resource_id: string;
  output_id?: string;
  output_file?: string;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type mastertax_import_logPk = "id";
export type mastertax_import_logId = mastertax_import_log[mastertax_import_logPk];
export type mastertax_import_logOptionalAttributes = "id" | "output_id" | "output_file" | "status" | "created_at" | "updated_at";
export type mastertax_import_logCreationAttributes = Optional<mastertax_import_logAttributes, mastertax_import_logOptionalAttributes>;

export class mastertax_import_log extends Model<mastertax_import_logAttributes, mastertax_import_logCreationAttributes> implements mastertax_import_logAttributes {
  id!: number;
  co_info_id!: number;
  data_import_logs_id!: number;
  type!: string;
  resource_id!: string;
  output_id?: string;
  output_file?: string;
  status?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof mastertax_import_log {
    return sequelize.define('mastertax_import_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    data_import_logs_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resource_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    output_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    output_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'mastertax_import_logs',
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
  }) as typeof mastertax_import_log;
  }
}
