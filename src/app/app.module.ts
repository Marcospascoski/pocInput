import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavegacaoModule, customTranslateLoader } from './navegacao/navegacao.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NavegacaoModule,    
    AppRoutingModule,
    IonicModule.forRoot(), 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
