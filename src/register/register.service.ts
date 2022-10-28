import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createRegister(req): Promise<string> {
        return `Cliente ${req.name} cadastrado com sucesso!`;
    }

    async findAll(): Promise<string> {
        return 'Lista de clientes cadastrados';
    }

    async findOne(id: string): Promise<string> {
        return `Cliente ${id} encontrado!`;
    }

    
}
