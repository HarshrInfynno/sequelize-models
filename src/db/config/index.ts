import { OperatorsAliases, Sequelize } from 'sequelize'
import config from '../../config'

export const connection = new Sequelize(
  config.DB_NAME as string,
  config.DB_USERNAME as string,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
)
