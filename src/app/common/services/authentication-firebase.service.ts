import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFirebaseService {

  constructor(private auth:Auth) { }

  loginWithFire(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password))
  };

  logoutFromFire(){
    return from(this.auth.signOut())
  }

  registerwithFire(username:string,password:string) {
    return createUserWithEmailAndPassword(this.auth, username, password);

  }
}
