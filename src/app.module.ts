import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { HttpModule } from '@nestjs/axios'
import {  Module, } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join as joinPath } from 'path'
import { ApikeyModule } from './apikey/apikey.module'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { DbModule } from './db/db.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: joinPath(process.cwd(), 'src/schema.gql'),
    }),
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    AuthModule,
    DbModule,
    ApikeyModule,
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
