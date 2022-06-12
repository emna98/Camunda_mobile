import { Component} from '@angular/core';
import {NavController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string = '';

  password:string = '';


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage:Storage,
    public auth:AuthService,
    public router:Router,
  ) {
  }
  
  myLogIn(){
    this.auth.login(this.email.trim(),this.password.trim()).then((data)=>{
      this.router.navigate(['home']);
  
       }).catch((err)=> {
      
        this.errorFunc("Username ou mot de passe incorrects !!");
       })
}
ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}

async errorFunc(message){
  const alert =  await this.alertCtrl.create({
    cssClass: 'basic-alert',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

}
