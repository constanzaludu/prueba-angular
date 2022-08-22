import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Series, SeriesDataContainer, SeriesDataWrapper } from '../interfaces/Series';
import { Comic, ComicDataContainer, ComicDataWrapper } from '../interfaces/Comics';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getSeriesById(id: string): Observable<Array<Partial<Series>>> {
    console.log("servicio " + id);
    return this.http
      .get<SeriesDataWrapper>(
        `${environment.apiurl}series/${id}?`
      )
      .pipe(
        map((res: SeriesDataWrapper) => {
          const dataContainer: SeriesDataContainer = res.data;
          dataContainer.results = dataContainer.results.map(
            (series: Partial<Series>) => ({
              id: series.id,
              name: series.title,
              thumbnail: series.thumbnail,
              related: series.comics
            })
          );
          return dataContainer.results;
        })
      );
  }

  
  getComicsById(id: string): Observable<Array<Partial<Comic>>> {
    console.log("servicio " + id);
    return this.http
      .get<ComicDataWrapper>(
        `${environment.apiurl}comics/${id}?`
      )
      .pipe(
        map((res: ComicDataWrapper) => {
          const dataContainer: ComicDataContainer = res.data;
          dataContainer.results = dataContainer.results?.map(
            (serie: Partial<Comic>) => ({
              id: serie.id,
              title: serie.title,
              modified: serie.modified,
              thumbnail: serie.thumbnail,
              related: serie.characters
            })
          );
          return dataContainer.results;
        })
      );
  }
}
