import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { sequelizeConfig } from 'src/config/config'
import { ApikeyRepository } from './apikey.repo'
import { ApikeyModel } from './models/apikey.model'

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...sequelizeConfig(),
        models: [ApikeyModel],
      }),
    }),
    SequelizeModule.forFeature([ApikeyModel]),
  ],
  providers: [ApikeyRepository],
  exports: [ApikeyRepository],
})
export class DbModule {}
