import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController,AlertController } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  form: any
  champsaffiche = [];
  champs =[];
  taske: string
  jsondata ={
   variables:{
  
   }
  }
  data1 ={
    
  }
  constructor( public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage:Storage,
    public task:TaskService,
    public auth:AuthService,
    public route:ActivatedRoute,
    public router:Router,
    public toast:Toast) { }

  ngOnInit() {
    this.task.gettaskform(this.route.snapshot.paramMap.get('id')).then((data)=>{
     console.log(data)
      let i= 0;
      let j=0;
      let k=0;
     while (Object.keys(data)[i]) {
        
       if (data[Object.keys(data)[i]].value != null )
       {
        this.champsaffiche[j]= Object.keys(data)[i];
        this.data1[Object.keys(data)[i]] = data[Object.keys(data)[i]];
        j++;
       }
       else {
        this.champs[k]= Object.keys(data)[i];
        this.jsondata.variables[Object.keys(data)[i]] = data[Object.keys(data)[i]];
        k++;
       }
       
       i++;
     }

  }),

  this.task.gettaskbykey(this.route.snapshot.paramMap.get('id')).then((data)=>{
    this.taske = data['name'];
     })

}
add(){
  console.log(this.jsondata);
  this.task.dotask(this.route.snapshot.paramMap.get('id'),this.jsondata).then((data)=>{
    this.toast.show(`Tache traitée avec succés`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    this. errorFunc('Tache traitée avec succés')
   this.router.navigate(['home']);
     }).catch((err)=> {
      this.toast.show(`Traitement de tache echouée`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
      this. errorFunc('Traitement de tache echoué')
     })
    
    }
    clictrue(obj, test:boolean){
      console.log(obj);
      this.jsondata.variables[obj].value = test;
  
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