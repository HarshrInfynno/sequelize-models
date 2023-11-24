import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface import_logAttributes {
  id: number;
  co_info_id: number;
  log_type?: string;
  log?: string;
  created_at?: Date;
  updated_at?: Date;
  import_type?: string;
}

export type import_logPk = "id";
export type import_logId = import_log[import_logPk];
export type import_logOptionalAttributes = "id" | "log_type" | "log" | "created_at" | "updated_at" | "import_type";
export type import_logCreationAttributes = Optional<import_logAttributes, import_logOptionalAttributes>;

export class import_log extends Model<import_logAttributes, import_logCreationAttributes> implements import_logAttributes {
  id!: number;
  co_info_id!: number;
  log_type?: string;
  log?: string;
  created_at?: Date;
  updated_at?: Date;
  import_type?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof import_log {
    return sequelize.define('import_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    log_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    import_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'import_logs',
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
  }) as typeof import_log;
  }
}
