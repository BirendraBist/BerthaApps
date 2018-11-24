import axios,
{
AxiosResponse,
AxiosError
}
from "../../node_modules/axios/index";

interface IUser {
    id: number;
    userName: string;
    userPassword: string;
    
}

let usernameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username-input");
let passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById("password-input");
let signinButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("signin-button");
signinButton.addEventListener("click", logIn);

function logIn(): void {

    let uri: string = " https://berthawebappproject20181124042559.azurewebsites.net/user/login" + usernameInput.value + "/" + passwordInput.value;
    axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data);
            if (response.data !== null)
             {
                if(response.data.typeOfUser==="A")
                window.location.href = 'https://berthathings.azurewebsites.net/AlldataView.html';
                else if (response.data.typeOfUser === "B")
                window.location.href = 'https://berthathings.azurewebsites.net/HealthandEnvironment.html';
             }
            else              
               alert("Wrong username and password")
               if(response.data===null)
               alert("Wrong username and password")
            
        })
        .catch (function (error: AxiosError): void {
            console.log(error);
            alert("Wrong username and password")
        }
        )}