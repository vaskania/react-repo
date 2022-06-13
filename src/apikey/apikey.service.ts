import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { randomBytes, randomUUID, pbkdf2 } from 'crypto'
import { ApikeyRepository } from 'src/db/apikey.repo'
import { promisify } from 'util'

@Injectable()
export class ApikeyService {
  private logger = new Logger('apikey.serice')
  private hash = promisify(pbkdf2)

  constructor(private readonly apikeyRepository: ApikeyRepository) {}

  async create(): Promise<string> {
    try {
      const token = randomUUID()
      const salt = randomBytes(16).toString('hex')
      const apikey = (
        await this.hash(token, salt, 1000, 25, 'sha256')
      ).toString('hex')

      const generatedApikey = await this.apikeyRepository.create(apikey)

      return generatedApikey.key
    } catch (error) {
      this.logger.error(error.message)
    }
  }

  async isValidKey(apikey: string): Promise<boolean> {
    if (!apikey) throw new Error('invalid apikey')
    const key = await this.apikeyRepository.find(apikey)
    if (!key) throw new Error('invalid apikey')

    return true
  }
}
