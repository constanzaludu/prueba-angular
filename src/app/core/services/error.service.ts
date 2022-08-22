import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar , private router: Router,) { }

  //Cuando salta este metodo que es el que manda el interceptor, 
  //nos carga el mensaje de error en forma de snackbar
  sendError(errorMessage: string) {
    console.error(errorMessage);
    this.openSnackBar(errorMessage, 'close')
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
    this.router.navigateByUrl('series');
  }
}