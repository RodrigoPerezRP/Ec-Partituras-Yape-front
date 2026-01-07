import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Partitura } from '../interfaces/Partitura';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartituraService {

  constructor(private http: HttpClient) { }

  env = environment
  apiUrl = this.env.API_URL

  listPartituras(): Observable<any>{
    return this.http.get(`${this.apiUrl}/partituras/list/`).pipe(
      catchError((error) => {
        return throwError("Algo salio mal")
      })
    )
  }


  listPartiturasDestacados(): Observable<any>{
    return this.http.get(`${this.apiUrl}/partituras/list/destacados/`).pipe(
      catchError((error) => {
        return throwError("Algo salio mal")
      })
    )
  }

  detailPartitura(slug: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/partituras/get/${slug}/`).pipe(
      catchError((error) => {
        return throwError("Algo salio mal")
      })
    )
  }

  createPayment(body: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/partituras/create/pay/`, body).pipe(
      catchError((err) => {
        return throwError("Algo salio mal")
      })
    )
  }

}
