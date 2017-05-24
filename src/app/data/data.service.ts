import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import { Album, Genre } from './index';

@Injectable()
export class DataService {
    constructor(private http: Http) {

    }

    getTopSellingAlbums(): Observable<Album[]> {
        return this.http.get('http://localhost:49997/api/albums/topselling')
            .do(res => console.log('HTTP response:', res))
            .map((response: Response) => <Album[]>response.json())
            .catch(this.handleError);
    }

    getGenre(): Observable<Genre> {
        return this.http.get('http://localhost:49997/api/genres/country')
            .map((response: Response) => response.json() as Genre)
            .do(console.log)
            .catch(this.handleError);
    }

    test(): Observable<Response> {
        return this.http.get('http://localhost:49997/api/genres/country')
            .do(res => console.log('HTTP response:', res))
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.statusText);
    }
}
