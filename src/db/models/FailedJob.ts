import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface failed_jobAttributes {
  id: number;
  connection: string;
  queue: string;
  payload: string;
  exception: string;
  failed_at: Date;
}

export type failed_jobPk = "id";
export type failed_jobId = failed_job[failed_jobPk];
export type failed_jobOptionalAttributes = "id" | "failed_at";
export type failed_jobCreationAttributes = Optional<failed_jobAttributes, failed_jobOptionalAttributes>;

export class failed_job extends Model<failed_jobAttributes, failed_jobCreationAttributes> implements failed_jobAttributes {
  id!: number;
  connection!: string;
  queue!: string;
  payload!: string;
  exception!: string;
  failed_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof failed_job {
    return sequelize.define('failed_job', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    connection: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exception: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'failed_jobs',
    timestamps: false,
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
  }) as typeof failed_job;
  }
}
