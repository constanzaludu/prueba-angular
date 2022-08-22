import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Module
import { AngularMaterialModule } from '../app/modules/angular-material/angular-material.module';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { DateFormaterPipe } from './shared/guards/pipes/date-format.pipe';
import { ThumbnailPipe } from './shared/guards/pipes/thumbnail.pipe';
import { DatePipe } from '@angular/common';
import { AddKeysInterceptor } from './shared/guards/interceptors/add-keys.interceptor';
import { CatchErrorInterceptor } from './shared/guards/interceptors/catch-error.interceptor';
import { GoBackButtonComponent } from './components/buttons/go-back-button/go-back-button.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    DataTableComponent,
    PageNotFoundComponent,
    ProgressSpinnerComponent,
    TableContainerComponent,
    DateFormaterPipe,
    ThumbnailPipe,
    GoBackButtonComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [DatePipe,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AddKeysInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}