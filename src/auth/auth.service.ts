import { Injectable } from '@nestjs/common'
import { ApikeyService } from 'src/apikey/apikey.service'
@Injectable()
export class AuthService {
  constructor(private readonly apikeyService: ApikeyService) {}

  async validateApiKey(apiKey: string): Promise<boolean> {
    const isKeyValid = await this.apikeyService.isValidKey(apiKey)

    return isKeyValid
  }
}
