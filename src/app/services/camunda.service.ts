import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var require: any

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  apiurl : 'http://digitalisi.tn:8080/engine-rest/user/'
   
  constructor(public storage:Storage,
    private http: HttpClient,
  
    ) { }

  http_GET(){
    return new Promise((resolve, reject) => {
    let username=localStorage.getItem("nom")
    let password=localStorage.getItem("password")
        const axios = require('axios');

        axios.get('/camunda/process-definition?latest=true&active=true&startableInTasklist=true&startablePermissionCheck=true&firstResult=0&maxResults=15',
              {
                
                auth:{
                  username: username,
                  password: password,
                }
                
              }).then(({ data })=> {
                //console.log(JSON.stringify(data));
                resolve(data);
                
              })
              .catch((err)=> {reject(err);})
});
  }
  getform(id){
    return new Promise((resolve, reject) => {
    let username=localStorage.getItem("nom")
    let password=localStorage.getItem("password")
        const axios = require('axios');
        axios.get('camunda/process-definition/key/'+id+'/form-variables',
              {
                
                auth:{
                  username: username,
                  password: password,
                }
                
              }).then(({ data })=> {
                //console.log(JSON.stringify(data));
                resolve(data);
                
              })
              .catch((err)=> {reject(err);})
});
  }
  getprocessbykey(id){
    return new Promise((resolve, reject) => {
    let username=localStorage.getItem("nom")
    let password=localStorage.getItem("password")
        const axios = require('axios');
        axios.get('camunda/process-definition/key/'+id,
              {
                
                auth:{
                  username: username,
                  password: password,
                }
                
              }).then(({ data })=> {
                //console.log(JSON.stringify(data));
                resolve(data);
                
              })
              .catch((err)=> {reject(err);})
});
  }
  startprocess(key , process){
    return new Promise((resolve, reject) => {
    let username=localStorage.getItem("nom")
    let password=localStorage.getItem("password")
        const axios = require('axios');
        axios.post('camunda/process-definition/key/'+key+'/submit-form',process,
              {
                
                auth:{
                  username: username,
                  password: password,
                }
                
              }).then(({ data })=> {
                //console.log(JSON.stringify(data));
                resolve(data);
                
              })
              .catch((err)=> {reject(err);})
});
  }
}

  

   
    