import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  async sendEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.RECIPIENT_MAIL,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h3>New Contact from Portfolio</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return { message: 'Your email was sent successfully', success: true };
    } catch (err) {
      console.error('error sending mail', err);
      throw err;
    }
  }
}
