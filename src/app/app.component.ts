import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms'
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'blog';
  // getName(name:string){
  //   alert(name);
  // }
  // getData(val:string){
  //   console.log(val);
  // }
  // displayval:string='';
  // getValue(val:string){
  //   console.warn(val);
  //   this.displayval=val;
  // }
  // count:number=0;
  // counval(type:string){
  //   type==='add'? this.count++:this.count--;
  //    }

  // show=false;
  // color="red";

  // list=['mango','banana','water millon','grapes','Nelli','kabaranka'];
  // userDet=[
  //   {name:'Chama',email:'chamathnirmal99@gmail.com',town:'Horana'},
  //   {name:'Dil',email:'dilshani99@gmail.com',town:'Meewanapalana'},
  //   {name:'Kamal',email:'Kamala@gmail.com',town:'gampaha'},
  //   {name:'Anil',email:'anil@gmail.com',town:'colombo'},
    
  // ]

  //  userDets=[
  //   {name:'Chama',email:'chamathnirmal99@gmail.com',town:'Horana',accounts:['insta','facebook','yahoo']},
  //   {name:'Dil',email:'dilshani99@gmail.com',town:'Meewanapalana',accounts:['yahoo','facebook','insta']},
  //   {name:'Kamal',email:'Kamala@gmail.com',town:'gampaha',accounts:['facebook','twitter','yahoo']},
  //   {name:'Anil',email:'anil@gmail.com',town:'colombo',accounts:['whatsap','facebook','gmail']},
    
  // ]

//  color="blue";
//  bgcolor="green";

//  updatecolor(){
//   this.color="white";
//   this.bgcolor="black";
//  }

// userData:any={};
// getData(data:NgForm ){
// console.warn(data);
// this.userData=data;
// }

// display=true;
// toggle(){
//   // this.display=false;
//   this.display=!this.display;
// }
// data=100;

// updateData(){
//   // this.data=Math.random();
//   this.data=Math.floor(Math.random()*10);
// }


// userDetails=[
//   {name:'Anil',email:'anil@test.com'},
//   {name:'Sam',email:'Sam@test.com'},
//   {name:'Chama',email:'Chama@test.com'},
//   {name:'Dil',email:'Dil@test.com'},
//   {name:'Chad',email:'Chad@test.com'},
// ]

// data='';
// updateData(item:string){
// console.warn(item);
// this.data=item;

// }

// title='two way binding';
// data:any;

// title='template reference variable';

// getVal(item:HTMLInputElement){
// console.warn(item);
// }

// title='basic of typescript for angular';
// data=20;
// obj:{name:string,phn:number}={name:'string',phn:123}
// arr:number[]=[20,30,40];

// getData(item:any){
//   this.obj={name:'peter',phn:456};
//   this.arr=[1,3,5];
//   return item;
// }

// getItem(){
//   this.getData(30);
// }

// title='Angular Basic Pipes';
// today=Date();

// capstring(item:string){
// return item.toUpperCase();
// }

// title='Angular Advanced Pipes';
// user={
//   name:'chama',
//   age:25,
// }


// title='Angular Custom Pipes';

title='Angular Template Driven Form';
// loginUser(item:any){
// console.warn(item);

// }

loginForm=new FormGroup({
 user:new FormControl(''),
 password:new FormControl(''),
//  user:new FormControl('chamaN'),
//  password:new FormControl('123'),
  
}
)
loginUser(){
  console.warn(this.loginForm.value);
}
}

