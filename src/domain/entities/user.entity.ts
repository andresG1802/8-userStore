
//Estamos creando esta clase de entidad
//en tal caso mongoose cambie
//o suceda algun cambio en la base de datos

import { CustomError } from "../errors/custom.error";

//o lo que sea
export class UserEntity {
    constructor(
        public id:string,
        public name:string,
        public email:string,
        public emailValidated:boolean,
        public password:string,
        public role:string[],
        //cuidado con el opcional
        //ya que tiene que ser al ultimo
        public img?:string,
    ){}

    static fromObject(object:{[key:string]:any})
    {
        const {id,_id,name,email,emailValidated,password,role,img} = object;

        if(!_id && !id)
        {
            throw CustomError.badRequest('Missing id');
        }
        if(!name) throw CustomError.badRequest('Mising name');
        if(!email) throw CustomError.badRequest('Missing email');
        if( emailValidated  === undefined) throw CustomError.badRequest('Missing emailValidated');
        if(!password) throw CustomError.badRequest('Missing password');
        if(!role) throw CustomError.badRequest('Missing role');

        return new UserEntity(_id || id,name,email,emailValidated,password,role,img);
    }



}