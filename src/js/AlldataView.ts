// import axios ,{
//     AxiosResponse,
//     AxiosError
// } from "../../node_modules";
 
// interface IUser {
//     id: number;
//     userName: string;
//     userPassword: string;    
// }
// interface IHealth{
//     healthId:number;
//     dateTime:Date;
//     location :string;
//     bodyTemperature:number;
//     upperBloodpressure:number;
//     lowerBloodpressure:number;
//     heartBeatpersecond: number;
//     userId:number;
// }
// let gethealth :HTMLButtonElement=<HTMLButtonElement>document.getElementById("getAllbtn");
// gethealth.addEventListener("click",getAllhealth);
// function getAllhealth(): void{
//     let healthOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("healthOutput");
//     let uri: string = " https://berthaapplication20181120122306.azurewebsites.net/api/health"; 
   
//     axios.get<IHealth>(uri)
//     .then(function(response:AxiosResponse<IHealth[]>):void{
//         let result:string="<table><tr><th>HealthId</th><th>Date</th><th>Location</th><th>Bodytemperature</th><th>UpperBloodPressure</th><th>LowBloodPressure</th><th>HeartBeat</th><th>UserId</th>"
//         response.date.foreach((hltD:IHealth)=>{
//             result +="<tr><td>"+hltD.healthId+"</td><td>"+hltD.dateTime+"</td><td>"+hltD.location+"</td><td>"+hltD.bodyTemperature+"</td><td>"+hltD.upperBloodpressure+"</td><td>"+hltD.lowerBloodpressure+"</td><td>"+hltD.heartBeatpersecond+"</td><td>"+ hltD.userId+"</td></tr>"
//      });
//      result+="</table>"
//      healthOutput.innerHTML=result;
//     })
//     .catch (function (error: AxiosError): void {
//         if (error.response) {
//             healthOutput.innerHTML = error;}
//         else {healthOutput.innerHTML = error;}
//    })
// }
//     let getByid: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getByid");
//     getByid.addEventListener("click", gethealthdatabyid);

// function gethealthdatabyid(): void{
//     let inputId: HTMLInputElement = <HTMLInputElement>document.getElementById("inputId");
//     let healthOutputbyid: HTMLDivElement = <HTMLDivElement>document.getElementById("healthOutputbyid");
//     let id: string = inputId.value;
//     let uri: string = " https://berthaapplication20181120122306.azurewebsites.net/api/user/" + id + "/health";

//     axios.get<IHealth>(uri)
//     .then(function (response: AxiosResponse<IHealth[]>): void{
//         let result: string = "<table><tr><th>Id</th><th>Oxygen</th><th>Co2</th><th>Co</th><th>Pm25</th><th>Pm10</th><th>Ozon</th><th>Dust Particles</th><th>Nitrogen Dioxide</th><th>Sulphur Dioxide</th><th>Longitute</th><th>Latitute</th><th>User Id</th><th>Date</th>" 
//              response.data.forEach((databyid: IHealth) => {
//             result += "<tr><td>" + databyid.healthId + "</td><td>" + databyid.location + "</td><td>" + databyid.dateTime + "</td><td>" + databyid.bodyTemperature + "</td><td>" + databyid.upperBloodpressure + "</td><td>" + databyid.lowerBloodpressure + "</td><td>" + databyid.heartBeatpersecond + "</td><td>" + databyid.userId + "</td></tr>"
//         });
//         result += "</table>"
//         healthOutputbyid.innerHTML = result;
//     })
//     .catch (function (error: AxiosError): void {
//         if (error.response) {
//             healthOutputbyid.innerHTML = error;}
//         else {healthOutputbyid.innerHTML = error;}
//    })
// }
import axios, {
    AxiosResponse,
    AxiosError,
} from "../../node_modules/axios/index";

import { json2table100 } from "./generictable";

interface IUser {
    id: number;
    userName: string;
    userPassword: string;    
}
interface IHealth{
    healthId:number;
    dateTime:Date;
    location :string;
    bodyTemperature:number;
    upperBloodpressure:number;
    lowerBloodpressure:number;
    heartBeatpersecond: number;
    userId:number;
}
axios.get<IUser[]>("https://berthaapplication20181120122306.azurewebsites.net/api/health")
    .then(function (response: AxiosResponse<IUser[]>): void {
        let data: IUser[] = response.data;
        console.log(data);
        let result: string = json2table100(response.data);
        console.log(result);
        let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
        element.innerHTML = result;
    })
    .catch(function (error: AxiosError): void {
        console.log(JSON.stringify(error));
    });
