import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Series,
  SeriesDataWrapper,
  SeriesDataContainer
} from '../interfaces/Series';
import { MatTableDataSource } from '@angular/material/table';
import { ComicDataContainer, ComicDataWrapper, Comic } from '../interfaces/Comics';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient, private router: Router) {}

  getSeries(): Observable<Array<Partial<Series>>> {
    return this.http
      .get<SeriesDataWrapper>(`${environment.apiurl}series?`)
      .pipe(
        map((res: SeriesDataWrapper) => {
          console.log(`${environment.apiurl}series?`);
          const dataContainer: SeriesDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (serie: Partial<Series>) => ({
              id: serie.id,
              title: serie.title,
              modified: serie.modified,
              thumbnail: serie.thumbnail,
              available: serie.comics?.available
            })
          );
          return dataContainer.results;
        })
      );
  }

  getSeriesForIdComic(id: number): Observable<Array<Partial<Series>>> {
    return this.http
      .get<SeriesDataWrapper>(`${environment.apiurl}comics/${id}/series?`)
      .pipe(
        map((res: SeriesDataWrapper) => {
          const dataContainer: SeriesDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (serie: Partial<Series>) => ({
              id: serie.id,
              title: serie.title,
              modified: serie.modified,
              thumbnail: serie.thumbnail,
              available: serie.comics?.available
            })
          );
          return dataContainer.results;
        })
      );
  }

  getComics(id: number): Observable<Array<Partial<Comic>>> {
    return this.http
      .get<ComicDataWrapper>(`${environment.apiurl}series/${id}/comics?`)
      .pipe(
        map((res: ComicDataWrapper) => {
          const dataContainer: ComicDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (comics: Partial<Comic>) => ({
              id: comics.id,
              title: comics.title,
              modified: comics.modified,
              thumbnail: comics.thumbnail
            })
          );
          return dataContainer.results;
        })
      );
  }

  getMatTable(
    state: string,
    id?: number
  ): Observable<MatTableDataSource<Partial<unknown>>> {
    if (state === 'series') {
      return this.getSeries().pipe(
        map((apiResult) => {
          let dataSource = new MatTableDataSource<Partial<Series>>(apiResult);
          dataSource.data = apiResult;
          return dataSource;
        })
      );
    } else {
      return this.getComics(id!).pipe(
        map((apiResult) => {
          let dataSource = new MatTableDataSource<Partial<Comic>>(apiResult);
          dataSource.data = apiResult;
          return dataSource;
        })
      );
    }
  }
}