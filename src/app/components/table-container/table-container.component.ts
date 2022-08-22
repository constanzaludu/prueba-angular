import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Series } from '../../core/interfaces/Series';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// Servicios
import { GetDataService } from '../../core/services/get-data.service';

// Columnas de la tabla de Angular material segun el tipo
const seriesArray = [
  'id',
  'title',
  'modified',
  'thumbnail',
  'detail'
];

const comicsArray = [
  'id',
  'title',
  'modified',
  'thumbnail',
  'detail'
];

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  loading: boolean = false;
  displayedColumns!: string[];
  dataSource!: Observable<MatTableDataSource<Partial<Series>>>;
  currentState: string = 'comics';
  state: string = 'comics';
  id!: string;
  type!: string;

  constructor(
    private _activatedroute: ActivatedRoute,
    private getDataSrv: GetDataService,
    private router: Router,

    ) {}

  ngOnInit(): void {
     // 👇 Esto sirve para que al cargar el mismo componente en la ruta podamos recargar la pagina con cada peticion.
    // Y que se nos muestren los datos.
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.type = this._activatedroute.snapshot.paramMap.get('type')!;
    this.id = this._activatedroute.snapshot.paramMap.get('id')!;

    if (this.type === null) {
      this.currentState = 'comics';
      this.displayedColumns = seriesArray;
      this.dataSource = this.getDataSrv.getMatTable('series');
    } else {
      if (this.type === 'comics') {
        this.currentState = 'comics';
        this.state = 'comics';
        this.displayedColumns = comicsArray;
      }
      if (this.type === 'comics') {
        this.currentState = 'comics';
        this.state = 'comics';
        this.displayedColumns = seriesArray;
      }
    this.callData(parseInt(this.id));
    }
  }

  getInfo(id: number) {
    //La unica vez que será characters es cuando cargue la web
    //Despues por defecto será comics
    console.log(this.state);
      if (this.state === 'series') {
        this.state = 'comics';
      } else if (this.state === 'comics') {
        this.state = 'comics';
      } else {
        this.state = 'comics';
      }
      console.log("estado, getinfo " + this.state);
      this.displayedColumns = seriesArray;
      this.dataSource = this.getDataSrv.getMatTable(this.state, id);
  }
  
  obtainClick(id: number) {
    console.log('Hacemos la peticion de datos obtain: ', id, this.state);
    this.router.navigateByUrl(`/series/${this.state}/${id}`);
  }

  callData(id: number) {
    console.log('Hacemos la peticion de datos  data: ', id, this.state);
    this.dataSource = this.getDataSrv.getMatTable(this.state, id);
  }
}
