import { Component ,OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController,AlertController } from '@ionic/angular';
import { CamundaService } from '../services/camunda.service';
import { AuthService } from '../services/auth.service';
import { TaskService } from '../services/task.service';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
nom : string
listprocess: any
listtask: any
tailleProcess:any;
tailleTask:any;
test=false;
  constructor( 
     public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage:Storage,
    public camunda:CamundaService,
    public auth:AuthService,
    public task:TaskService,
    public toast:Toast
    ) {}
ngOnInit(): void {
  this.nom = localStorage.getItem("nom")
  this.camunda.http_GET().then((data)=>{
       this.listprocess=data;
       this.tailleProcess=this.listprocess.length;
      }),
      this.task.gettask().then((dat)=>{
        this.listtask=dat;
        this.tailleTask= this.listtask.length;
       })
}

logout(){
  this.auth.logout();
 location.reload();
}
setTest(val:boolean){
  this.test=val;
}
}
