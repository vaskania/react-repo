import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ApikeyModel } from "./models/apikey.model";

@Injectable()
export class ApikeyRepository {
  logger = new Logger("apikey.repository");

  constructor(
    @InjectModel(ApikeyModel) private readonly apikeyModel: typeof ApikeyModel
  ) {
    this.apikeyModel.sync().then(() => this.logger.log("apiKey model synced"));
  }

  create(apiKey: string) {
    return new this.apikeyModel({ key: apiKey }).save();
  }

  find(apikey: string) {
    return this.apikeyModel.findOne({
      where: {
        key: apikey
      }
    });
  }
}
