import { Prop } from "@nestjs/mongoose";
import { IsEmail, isEmpty, IsEmpty, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsNotEmpty({ message: 'Email không được để trống' })
    @IsEmail({}, { message: 'Email không đúng định dạng' })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống' })
    password: string;

    @IsEmpty()
    phone: string;

    @IsEmpty()
    address: string;

    @IsEmpty()
    image: string;
}
