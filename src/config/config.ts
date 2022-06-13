import { SequelizeOptions } from 'sequelize-typescript'

export const sequelizeConfig = (): SequelizeOptions => ({
  dialect: 'sqlite',
  storage: 'data.sqlite',
})
