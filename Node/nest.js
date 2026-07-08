import { Controller, Get } from "@nestjs/common";

@Controller() 
export class AppController {
    @Get()
    getHello(): string {
        return "Hello this is nest.js";
    }
}

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log(`Nest.js serevr running at http://localhost: 8080`);
}
bootstrap();