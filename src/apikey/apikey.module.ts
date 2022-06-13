import { Module } from '@nestjs/common'
import { DbModule } from 'src/db/db.module'
import { ApikeyService } from './apikey.service'

@Module({
  imports: [DbModule],
  providers: [ApikeyService],
  exports: [ApikeyService],
})
export class ApikeyModule {}
