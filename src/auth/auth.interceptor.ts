import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class ApikeyInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context)
    const { apikey } = ctx.getContext().req.headers

    if (!apikey) {
      throw new ForbiddenException('invalid apikey')
    }

    const isApikeyValid = await this.authService.validateApiKey(apikey)

    if (!isApikeyValid) {
      throw new ForbiddenException('invalid apikey')
    }
    return next.handle()
  }
}
