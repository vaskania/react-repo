import { Module } from "@nestjs/common";
import { ApikeyModule } from "src/apikey/apikey.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    ApikeyModule
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {
}
