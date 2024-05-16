import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export const start = async () => {
    try {
        const PORT = 5000;
        const app = await NestFactory.create(AppModule);
        const config = new DocumentBuilder()
            .setTitle('Logistic table')
            .setDescription('The logistic table API description')
            .setVersion('1.0')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/swagger', app, document);

        app.enableCors();
        await app.listen(PORT);
    } catch (err) {
        console.log(err);
    }
}

start();