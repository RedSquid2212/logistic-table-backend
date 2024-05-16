import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ApplicationEntity} from "../entities/application.entity";
import {CreateApplicationDto} from "./dto/createApplication.dto";
import {Repository} from "typeorm";

@Injectable()
export class ApplicationsService {
    constructor(
        @InjectRepository(ApplicationEntity)
        private applicationRepo: Repository<ApplicationEntity>
    ) {}

    async getAllApplications() {
        return this.applicationRepo.find();
    }

    async getCurrentApplication(id: number) {
        return this.applicationRepo.findOneBy({ id });
    }

    async createApplication(dto: CreateApplicationDto) {
        const atiRef = `https://ati.su/firms/${dto.ati}/info`;
        const application = this.applicationRepo.create({
            ...dto,
            ati: atiRef,
            receivingDate: new Date().toLocaleString('ru')
        });

        return this.applicationRepo.save(application);
    }

    async updateApplication(id: number, dto: CreateApplicationDto) {
        return this.applicationRepo.update(id, dto);
    }

    async deleteApplication(id: number) {
        return this.applicationRepo.delete(id);
    }
}