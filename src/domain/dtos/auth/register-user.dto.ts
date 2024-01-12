import { regularExps } from "../../../config";

export class RegisterUserDto{

    constructor(
        public name:string,
        public email: string,
        public password:string,
    ){}


    static create( object : { [key:string]:any }):[string?, RegisterUserDto?] {
        const { name , email , password} = object;
        // Le puedes poner undefined
        if(!name) return ['Missing name'];
        if(!email) return ['Missing email'];
        if(!regularExps.email.test(email)) return ['Email is not valid']
        if(!password) return ['Missing password'];
    
        return [undefined, new RegisterUserDto(name,email,password)];
    }
}





