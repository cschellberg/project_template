import {Injector} from "@sailplane/injector";
import {UserRepository} from "../repository/user-respository";
import {User} from "../models/user/user-models"


export class UserService {
    constructor(private readonly userRepository:UserRepository){}

    async deleteUser(email:string):Promise<void>{
        await this.userRepository.deleteUser(email);
    }

    async addUser(user:User):Promise<void>{
        await this.userRepository.addUser(user);
    }

    async getUsers():Promise<Array<User>>{
        return await this.userRepository.getUsers();
    }

}

Injector.register(UserService,[UserRepository]);