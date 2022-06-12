import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var require: any


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public storage:Storage,
    private http: HttpClient) { }

    gettask(){
      return new Promise((resolve, reject) => {
      let username=localStorage.getItem("nom")
      let password=localStorage.getItem("password")
          const axios = require('axios');
  
          axios.get('/camunda/task',
                {
                  
                  auth:{
                    username: username,
                    password: password,
                  }
                  
                }).then(({ data })=> {
                  //console.log(JSON.stringify(data));
                  resolve(data);
                  
                })
                .catch((err)=> {
                  reject(err);
                })
  });
    }
    gettaskform(id){
      return new Promise((resolve, reject) => {
      let username=localStorage.getItem("nom")
      let password=localStorage.getItem("password")
          const axios = require('axios');
  
          axios.get('/camunda/task/'+id+'/form-variables',
                {
                  
                  auth:{
                    username: username,
                    password: password,
                  }
                  
                }).then(({ data })=> {
                  //console.log(JSON.stringify(data));
                  resolve(data);
                  
                })
                .catch((err)=> {
                  reject(err);
                })
  });
    }
    getvariables(id){
      return new Promise((resolve, reject) => {
      let username=localStorage.getItem("nom")
      let password=localStorage.getItem("password")
          const axios = require('axios');
  
          axios.get('/camunda/task/'+id+'/variables',
                {
                  
                  auth:{
                    username: username,
                    password: password,
                  }
                  
                }).then(({ data })=> {
                  //console.log(JSON.stringify(data));
                  resolve(data);
                  
                })
                .catch((err)=> {
                  reject(err);
                })
  });
    }
    gettaskbykey(id){
      return new Promise((resolve, reject) => {
      let username=localStorage.getItem("nom")
      let password=localStorage.getItem("password")
          const axios = require('axios');
          axios.get('camunda/task/'+id,
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
    dotask(id , task){
      return new Promise((resolve, reject) => {
      let username=localStorage.getItem("nom")
      let password=localStorage.getItem("password")
          const axios = require('axios');
          axios.post('camunda/task/'+id+'/submit-form',task,
                {
                  
                  auth:{
                    username: username,
                    password: password,
                  }
                  
                }).then(({ data })=> {
                  //console.log(JSON.stringify(data));
                  resolve(data);
                  
                })
                .catch((err)=> {
                  reject(err);
                })
  });
    }
}
