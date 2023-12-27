import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{

LogMessage(name:String,status:string){

console.log('A new User with the name ${name} and status ${status} is registered');


}

}