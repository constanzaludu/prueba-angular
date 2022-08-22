import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.scss']
})
export class GoBackButtonComponent implements OnInit {

  constructor(public navigation: NavigationService ) {
    this.navigation.startSaveHistory()
   }

  ngOnInit(): void {
  }

}
