import { regularExps } from "../../../config";

export class LoginUserDto{

    constructor(
        public email: string,
        public password:string,
    ){}


    static create( object : { [key:string]:any }):[string?, LoginUserDto?] {
        const {  email , password} = object;
        // Le puedes poner undefined
        if(!email) return ['Missing email'];
        if(!password) return ['Missing password'];
        if(password.length < 5) return ['Password too short'];
        
        return [undefined, new LoginUserDto(email,password)];
    }
}
