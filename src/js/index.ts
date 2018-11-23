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

    let uri: string = "https://berthaapplication20181120122306.azurewebsites.net/api/user/login" + usernameInput.value + "/" + passwordInput.value;
    axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data);
            if (response.data === true) {
                window.location.href = 'http://localhost:3000/AlldataView.html';
            }
            else {
                alert("Wrong username and password")
            }
        })
        .catch(function (error: AxiosError): void {
            console.log(error);
        }
        )
}