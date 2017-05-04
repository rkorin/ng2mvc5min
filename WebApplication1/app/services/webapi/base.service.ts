import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { PostResultModel } from './models';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share'

@Injectable()
export class WebApiService<T>  {
    constructor(protected http: Http) { }

    public baseUrl = 'http://localhost:3979/api/';
    public controller = 'auth';

    result: string;
    errorMessage: string;

    public getGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public buildOptions(): RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public getCommon<TReturn>(id: string): Observable<TReturn> {
        let options = this.buildOptions();
        let url = this.baseUrl + this.controller;

        if (id)
            url += '/' + id;

        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public get_observable(): Observable<T[]> {
        return this.getCommon<T[]>(null);
    }

    public getById_observable(id: string): Observable<T> {
        return this.getCommon<T>(id);
    }

    public put_observable(id: string, data: T): Observable<T> {
        let options = this.buildOptions();
        let url = this.baseUrl + this.controller;

        if (id)
            url += '/' + id;

        return this.http.put(url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public post_observable(data: T): Observable<PostResultModel> {
        let options = this.buildOptions();
        return this.http.post(this.baseUrl + this.controller, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public post_any(data: any): Observable<any> {
        let options = this.buildOptions();
        return this.http.post(this.baseUrl + this.controller, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public delete_observable(id: string): Observable<T> {
        let options = this.buildOptions();
        let url = this.baseUrl + this.controller;

        if (id)
            url += '/' + id;

        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected extractData(res: Response) {
        let body = res.json() || {};
        return body.data || body || {};
    }

    protected handleError(error: Response | any) {
        debugger
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public List(): Observable<Array<T>> {
        return this.get_observable();
    }

    public Item(id: any): Observable<T> {
        return this.getById_observable(id);
    }

    public Set(item: T): Observable<PostResultModel> {
        return this.post_observable(item);
    }
}
