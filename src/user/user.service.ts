import { Injectable } from "@nestjs/common";
import { user } from "./user.type";
import userdata from "./user";

@Injectable()
export class UserService{
    private users:user[]=userdata;
    async getAllUser():Promise<user[]>{
        return this.users;
    }
    async getById(id:number):Promise<user>{
        const userfound = this.users.find(user=>user.id==id);
        return userfound;
    }
    async addUser(user:user):Promise<string>{
        const {id,name,gender,age} = user
        if( id==null || name == "" || gender=="" || age ==null ){
            return "add not success"
        }
        this.users.push({
            id,
            name,
            gender,
            age
        });
        return "add success";
    }
    async updateUser(updateid:number,user:user):Promise<string>{
        const {id,name,gender,age} = user
        const index = this.users.findIndex(user=>user.id==updateid);        
        // console.log(index);
        if(index==-1){
            return "404 not found"
        }
        if( id==null || name == "" || gender=="" || age ==null ){
            return "update not success"
        }
        this.users[index].id = id;
        this.users[index].name = name;
        this.users[index].gender = gender;
        this.users[index].age = age;
        return "update success";   
    }
    async deleteUser(id:number):Promise<string>{
        const index = this.users.findIndex(user=>user.id == id)
        if(index==-1){
            return "404 not found"
        }

        this.users.splice(index,1);

        return "delete success";
    }
}