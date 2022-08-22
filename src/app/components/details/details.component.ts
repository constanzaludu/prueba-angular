import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsService } from '../../core/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id!: string;
  type!: string;
  data!: Observable<Array<any>>;

  title: string = '';

  myForm: FormGroup;

  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private detailSvc: DetailsService,
    private router: Router,
  ) {
    this.myForm = this.fb.group({
      idForm: [''],
      titleForm: ['']
    });
  }

  ngOnInit(): void {
    this.type = this.activatedroute.snapshot.paramMap.get('type')!;
    this.id = this.activatedroute.snapshot.paramMap.get('id')!;
      this.title = 'Comics details';
      this.data = this.detailSvc.getComicsById(this.id);
  }
}
