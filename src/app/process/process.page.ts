import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController,AlertController } from '@ionic/angular';
import { CamundaService } from '../services/camunda.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
form: any
champs = [];
process: string
jsondata ={
 variables:{

 }
 
}
  constructor( public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage:Storage,
    public camunda:CamundaService,
    public auth:AuthService,
    public route:ActivatedRoute,
    public router:Router,
    public toast:Toast) { }

  ngOnInit(): void {
 this.camunda.getform(this.route.snapshot.paramMap.get('id')).then((data)=>{
      let i= 0;
     while (Object.keys(data)[i]) {
       this.champs[i]= Object.keys(data)[i]; 
       this.jsondata.variables[Object.keys(data)[i]] = data[Object.keys(data)[i]]
       /*{
         value:"",
         type: "String",
         valueInfo: {}
       };*/
       i++;
     }
        this.form=this.champs;
       }),
       this.camunda.getprocessbykey(this.route.snapshot.paramMap.get('id')).then((data)=>{
       this.process = data['name'];
        })
      }
      
add(){
  this.camunda.startprocess(this.route.snapshot.paramMap.get('id'),this.jsondata).then((data)=>{
    this.toast.show(`Demande envoyée avec succés`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    this. errorFunc('Demande envoyée avec succés')
   this.router.navigate(['home']);
     }).catch((err)=> {
      this.toast.show(`Demande echouée`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
      this. errorFunc('Demande echouée')
     })
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
