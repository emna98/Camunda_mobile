import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
declare var require: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(false);
  constructor(public storage:Storage,   
     private router: Router,
     private platform: Platform,
     public toastController: ToastController
    ) { 
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  
  ifLoggedIn() {
   if (localStorage.getItem('nom') != " ") {
    this.authState.next(true);
   }
        
      
  }

    login(nom,password){
      return new Promise((resolve, reject) => {
        // let username=localStorage.getItem("nom")
        // let password="bpm"
             const axios = require('axios');
     
             axios.get('/camunda/user',
                   {
                     
                     auth:{
                       username: nom,
                       password: password,
                     }
                     
                   }).then(({ data })=> {
                     localStorage.setItem('nom', nom)
                     localStorage.setItem('password', password)
                     this.authState.next(true);
                     resolve(data);
                     
                   })
                   .catch((err)=> {reject(err);})
     });
 
      
    }
    logout(){
      localStorage.setItem('nom'," ");
      localStorage.setItem('password'," ");
        this.router.navigate(['login']);
        this.authState.next(false);
    }
     isAuthenticated() {
      return this.authState.value;
     }
  
  }