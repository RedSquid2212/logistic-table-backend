import {Module} from "@nestjs/common";
import {ApplicationsController} from "./applications.controller";
import {ApplicationsService} from "./applications.service";
import {ApplicationEntity} from "../entities/application.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([ApplicationEntity])],
    controllers: [ApplicationsController],
    providers: [ApplicationsService]
})
export class ApplicationsModule {

}