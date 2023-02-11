import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthenticationFirebaseService } from '../services/authentication-firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = []
  username:string ='';
  password:string = ''
  constructor(private auth:AuthenticationFirebaseService) { }

  ngOnInit(): void {
    this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              }
          ]
      }
  ];
}

login(){

    this.username = 'anon1@mailinator.com';
    this.password = '123456789'
this.auth.loginWithFire(this.username,this.password).subscribe(
    (result) =>{
        console.log(result)
    },
    (err) =>{
        console.log(err)
    }
)

}
logout(){
    this.auth.logoutFromFire().subscribe(
        (res)=>{
            console.log(res)

    })
}

register(){
    this.username = 'anon1@mailinator.com';
    this.password = '123456789'
    this.auth.registerwithFire(this.username,this.password).then((res) => {
        console.log(res)
    })
    .catch((e) => console.log(e.message));
}

}
