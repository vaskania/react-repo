import {  UseInterceptors } from '@nestjs/common'
import { Resolver, Query, Field, Args, Mutation } from '@nestjs/graphql'
import { firstValueFrom } from 'rxjs'
import { ApikeyService } from './apikey/apikey.service'
import { AppService } from './app.service'
import { ApikeyInterceptor } from './auth/auth.interceptor'
import { CommitResponse as Commit } from './commit.response'

@Resolver()
export class AppResolver {
  constructor(
    private readonly apikeyService: ApikeyService,
    private readonly appService: AppService,
  ) {}
  @Mutation(() => String, { name: 'apikey' })
  async getApikey() {
    return await this.apikeyService.create()
  }

  @Query(() => [Commit])
  @UseInterceptors(ApikeyInterceptor)
  async getCommits(
    @Args('page', { nullable: true }) page?: number,
    @Args('limit', { nullable: true }) limit?: number,
  ) {
    try {
      const commits = await firstValueFrom(
        this.appService.getCommits(+page, +limit),
      )
      return commits
    } catch (error) {}
  }

  @Query(() => String)
  ping() {
    return 'hello world'
  }
}
