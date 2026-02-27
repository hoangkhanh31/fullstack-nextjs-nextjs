import { IsEmpty, IsNotEmpty, IsEmail, IsMongoId } from "class-validator";

export class UpdateUserDto {
    @IsMongoId({ message: 'ID không đúng định dạng' })
    @IsNotEmpty({ message: 'ID không được để trống' })
    _id: string;

    name: string;

    @IsEmail({}, { message: 'Email không đúng định dạng' })
    email: string;

    password: string;

    phone: string;

    address: string;

    image: string;
}
