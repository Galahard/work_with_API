import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, } from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";



@Injectable({
  providedIn: "root"
})

export class FlightService {


  constructor(private http: HttpClient) {
  }

  getAirport(icao: string): Observable<any> {

    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text',
      'X-RapidAPI-Key': '64f85d4acamsh486e5b5f7cbd9b9p1a8bb9jsn42368099c478',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    });
    return this.http.get<any>('https://aerodatabox.p.rapidapi.com/airports/icao/' + icao,
      {

        headers: myHeaders,
      }
    ).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);
      })
    )

  }


  getAll(icao: string): Observable<any> {

    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text',
      'X-RapidAPI-Key': '64f85d4acamsh486e5b5f7cbd9b9p1a8bb9jsn42368099c478',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    });
    return this.http.get<any>('https://aerodatabox.p.rapidapi.com/health/services/airports/'+icao+'/feeds',
      {

        headers: myHeaders,
      }
    ).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);
      })
    )

  }


}
