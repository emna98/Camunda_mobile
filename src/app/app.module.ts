import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy ,Platform} from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaService } from './services/camunda.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       HttpClientModule,
       
        ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CamundaService,
    AuthService,
    AuthGuard,
    SplashScreen,
    StatusBar,
    Storage,
    HttpClient,
    Toast,
    Platform
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
