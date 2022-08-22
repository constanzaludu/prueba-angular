import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Series } from '../../core/interfaces/Series';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateY(0)',
          opacity: 0
        })
      ),
      transition(':enter', [
        animate(
          1000,
          style({
            transform: 'translateY(0)',
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class DataTableComponent implements OnInit {
  loading: boolean = false;

  @Input() displayedColumns!: string[];
  @Input() dataSource!: Observable<MatTableDataSource<Partial<Series>>>;
  @Input() state!: string;
  @Input() currentState: string = '';
  @Output() id_emitter: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  getInfo(id: number) {
    if(this.router.url.match('comics')){
      this.snackBar.open('This action is not available', 'close', {
        duration: 3000 
      });
    } else {
      this.id_emitter.emit(id);
    }
  }
}