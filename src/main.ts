import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use((req, res, next) => {
  //   if (req.method === 'OPTIONS') {
  //     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //     res.header(
  //       'Access-Control-Allow-Methods',
  //       'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //     );
  //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //     return res.sendStatus(200);
  //   }
  //   next();
  // });

  app.enableCors({
    origin: ['http://localhost:3000', 'https://ella-portfolio-v2.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  await app.listen(process.env.PORT || 4006);
}
bootstrap();
