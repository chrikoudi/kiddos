import { Component, OnInit, ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'app-header',
  template: ` 
  <popup #log>
  <form class="bigger">
    <h1 id="log"> Login </h1>
    <br>
      <label> Email</label>
      <input type="text" id="email1" required />
      <br>
      <label> Password </label>
      <input type="password" id="password1" required />
      <br>    
    </form>
    <br>
    <hr>
    <h2>Did you forget your password?</h2> 
  </popup>

  <popup #reg>
    <form class="bigger right">
      <h1 id="reg"> Register </h1>
      <br>
        <label> Name</label>
        <input type="text" id="name" required />
        
        <br>
        <label> Surname</label>
        <input type="text" id="surname" required />
        
      <br>
        <label> Email</label>
        <input type="text" id="email2" required />
        <br>
        <label> Password </label>
        <input type="password" id="password2" required />
       
        <br>
        <label> Confirm </label>
        <input type="password" id="password3" required />
        <br>      
      </form>
      <br>
      <hr>
      <h2>Already have an account?</h2> 
  </popup>

  <header>
  <nav class="topnav">
  <ul class="navbar">
    <li><a [routerLink]="['home']" ><img id="logo" src="../../assets/images/logo.png"/></a></li>
    <button (click)='userLogin()' class="btn btn-warning btn-lg signin"><li> Login <li></button>
    <button (click)='userRegister()' class="btn btn-warning btn-lg signup"><li> Register </li></button>
  </ul>
</nav>
</header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('log') log: Popup;
  @ViewChild('reg') reg: Popup;

  constructor() { }

  ngOnInit() {
  }

  userLogin(){
    this.log.options = {
    header: '',
    color: '#fff',
    widthProsentage: 25,
    animationDuration: 2,
    showButtons: true,
    confirmBtnContent: 'OK',
    cancleBtnContent: 'Cancel',
    confirmBtnClass: 'btn btn-success',
    cancleBtnClass: 'btn btn-danger',
    animation: 'bounceInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
};
    this.log.show(this.log.options);

  };

  userRegister(){
    this.reg.options = {
      header: '',
      color: '#fff',
      widthProsentage: 35,
      animationDuration: 2,
      showButtons: true,
      confirmBtnContent: 'OK',
      cancleBtnContent: 'Cancel',
      confirmBtnClass: 'btn btn-success',
      cancleBtnClass: 'btn btn-danger',
      animation: 'bounceInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.reg.show(this.reg.options);
  }


}
