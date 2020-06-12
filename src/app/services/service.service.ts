import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { all,countries } from "../models/all";

const httpOption ={
  headers : new HttpHeaders({
    "content-type": "application/json"
  }),
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl :string = "https://disease.sh/v2";
  constructor( private http:HttpClient ) { }

  //get All Data From Server
  getAllData(what):Observable<all>{
    return this.http.get<all>(`${this.apiUrl}/${what}`,httpOption);
  }
  //get Country Data from Server
  getCountryData(what):Observable<countries[]>{
    return this.http.get<countries[]>(`${this.apiUrl}/${what}`,httpOption);
  }
}
