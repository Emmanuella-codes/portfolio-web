import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerController } from './mailer/mailer.controller';
import { MailerService } from './mailer/mailer.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [MailerController],
  providers: [MailerService],
})
export class AppModule {}
