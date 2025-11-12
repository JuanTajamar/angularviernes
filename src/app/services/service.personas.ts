import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";

@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient) {
    }
    getPersonas():Promise<any> {
        let url = environment.urlPers
        let request = "api/personas"
        let promise = new Promise((resolve) => {
            this._http.get(url + request).subscribe(response => {
                resolve(response);
            })
        })
        return promise;
    }
    getPersonsasAxios():Promise<any>{
        let url = environment.urlPers
        let request = "api/personas"
        let promise = new Promise((resolve) => {
            axios.get(url + request).then(response => {
                resolve(response.data)
            })
        })
        return promise
    }

    getPersonasFetch():Promise<any> {
        let url = environment.urlPers
        let request = "api/personas"
        let promise = new Promise((resolve) => {
            fetch(url +request)
            .then(response => response.json())
            .then(response => {
                resolve(response)
            })
        })
        return promise
    }    

}