import {
    Controller,
    Get,
    Post,
    Body,       
    Patch,
    Param,     
    Delete,

} from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegisterDTO';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) {}

    @Post()
    async creatUser(@Body() req: CreateRegisterDTO): Promise<string> {
        return this.registerService.createRegister(req);
    }

    @Get()
    async findAll(): Promise<string> {
        return this.registerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<string> {
        return this.registerService.findOne(id);
    }


    


    


}
