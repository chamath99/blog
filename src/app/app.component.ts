import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
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
data='';
updateData(item:string){
console.warn(item);
this.data=item;

}
}