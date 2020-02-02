import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NavegacaoModule { }
