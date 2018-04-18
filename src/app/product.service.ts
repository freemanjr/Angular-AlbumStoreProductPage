import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _http: Http;
  private _albumUrl: string = '../assets/album.json';

  constructor() { }
  getAlbum(id: Number) {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
