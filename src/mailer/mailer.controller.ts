/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('api/contact')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async sendEmail(@Body() contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    return await this.mailerService.sendEmail(contactData);
  }
}