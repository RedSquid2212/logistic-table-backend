import {Module} from "@nestjs/common";
import {ApplicationsModule} from "./applications/applications.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ApplicationEntity} from "./entities/application.entity";

@Module({
    imports: [
        ApplicationsModule,
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [ApplicationEntity],
                synchronize: true
            }),
            inject: [ConfigService]
        })
    ]
})
export class AppModule {}