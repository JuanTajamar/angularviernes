import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { Persona } from "../models/persona";

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

    getPersonasAxios(): Promise<any> {
        return new Promise((resolve) => {
        let url = environment.urlPers
        let request = "api/personas"
        axios.get(url + request).then(response => {
            resolve(response.data)
            })
        })
    }
    
    getPersonasFetch(): Promise<any> {
        return new Promise((resolve) => {
        let url = environment.urlPers
        let request = "api/personas"
        fetch(url + request)
        .then(response => response.json())
        .then(response => {
            resolve(response.data)
            })
        })
    }
}