import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post} from "@nestjs/common";
import {ApplicationsService} from "./applications.service";
import {CreateApplicationDto} from "./dto/createApplication.dto";

@Controller('/applications')
export class ApplicationsController {
    constructor(private applicationService: ApplicationsService) {}

    @Get()
    getAllApplications() {
        return this.applicationService.getAllApplications();
    }

    @Get(':id')
    async getCurrentApplication(@Param('id') id: number) {
        const currentApplication = await this.applicationService.getCurrentApplication(id);
        if (currentApplication) {
            return currentApplication;
        }
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    @Post()
    createApplication(@Body() data: CreateApplicationDto) {
        return this.applicationService.createApplication(data);
    }

    @Post(':id')
    updateApplication(@Param('id') id: number, @Body() data: CreateApplicationDto) {
        return this.applicationService.updateApplication(id, data);
    }

    @Delete(':id')
    deleteApplication(@Param('id') id: number) {
        return this.applicationService.deleteApplication(id);
    }
}