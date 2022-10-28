import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsPhoneNumber,
    MinLength,
    MaxLength } from "class-validator";

export class CreateRegisterDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsString()
    @IsNotEmpty()
    site: string;

    @IsPhoneNumber()
    phone?: string;
}