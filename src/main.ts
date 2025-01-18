import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
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

  // const whiteList = [
  //   'http://localhost:3000',
  //   'https://ella-portfolio-v2.vercel.app/',
  // ];
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (whiteList.indexOf(origin) !== -1) {
  //       console.log('allowed cors for :', origin);
  //       callback(null, true);
  //     } else {
  //       console.log('blocked cors for :', origin);
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  // });
  await app.listen(process.env.PORT || 4006);
}
bootstrap();
