import { Sequelize } from 'sequelize'
import { SequelizeAuto } from 'sequelize-auto'
import { CaseFileOption, LangOption } from 'sequelize-auto/types/types'
import config from './config'

const sequelize = new Sequelize({
  database: config.DB_NAME,
  host: config.DB_HOST,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  dialect: 'mysql',
})
const options = {
  directory: './src/db/models',
  caseFile: 'p' as CaseFileOption,
  singularize: true,
  useDefine: true,
  lang: 'ts' as LangOption,
}

const auto = new SequelizeAuto(sequelize, '', '', options)

auto.run()
