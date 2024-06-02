import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { user } from "./user.type";

@Controller("user")
export class UserController{
    constructor(
        private userService:UserService
    ){}
    @Get("/getusers")
    async getUsers():Promise<user[]>{
        return this.userService.getAllUser();
    }
    
    @Get("/getbyid/:id")
    async getById(@Param('id') id:number):Promise<user>{
        return this.userService.getById(id);
    }
    @Post('/adduser')
    async addUser(@Body() newuser:user):Promise<string>{
        return this.userService.addUser(newuser);
    }

    @Put("/updateuser/:id")
    async updateUser(@Param('id') id:number,@Body() newUser:user):Promise<string>{
        return this.userService.updateUser(id,newUser);
    }

    @Delete("/deleteuser/:id")
    async deleteUser(@Param('id') id:number):Promise<string>{
        return this.userService.deleteUser(id);
    }
}