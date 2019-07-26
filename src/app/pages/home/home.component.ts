import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Models/user-info';
import { UserDetails } from 'src/app/Models/user-details';
import { InfoService } from 'src/app/Services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  userObject = new UserDetails();

  users: UserDetails[] = [];//empty array here
  filterArray : UserDetails[] = [];
  currentDate = new Date();
  salary = 12000;
  dec = 1.2235545543566;

  info = [];
  constructor(private infoServ:InfoService) {

    infoServ.getDetails().subscribe((data) => { 
      this.info = data as [];
      console.log(this.info);
    });


    this.userObject = new UserDetails();
    this.userObject.country = "USA";
    this.userObject.emailid="bhadresh@dashtechinc.com";
    this.userObject.gender = "Male";
    this.userObject.userName = "Bhadresh";

    this.users.push(this.userObject);

    
    this.userObject = new UserDetails();
    this.userObject.country = "USAA";
    this.userObject.emailid="bhadresh_a@dashtechinc.com";
    this.userObject.gender = "Male";
    this.userObject.userName = "Bhadresh_a";

    this.users.push(this.userObject);

    
    this.userObject = new UserDetails();
    this.userObject.country = "India";
    this.userObject.emailid="a@dashtechinc.com";
    this.userObject.gender = "Male";
    this.userObject.userName = "a";

    this.users.push(this.userObject);

    
    this.userObject = new UserDetails();
    this.userObject.country = "B";
    this.userObject.emailid="b@dashtechinc.com";
    this.userObject.gender = "Male";
    this.userObject.userName = "b";

    this.users.push(this.userObject);

    this.filterArray = this.users;
  }

  searchtext = "";
  searchText(){

    this.filterArray = [];
    for (let index = 0; index < this.users.length; index++) {
      const element = this.users[index];
      if(element.userName.indexOf(this.searchtext) > -1)
      {
        this.filterArray.push(element);
      }
    }

    //this.filterArray = this.filterArray.filter(this.filterArrayFunction);
  }

  filterArrayFunction(element,index,array)
  {
    //return (element.userName == this.searchtext);
  }


  ngOnInit(){

  }

  getUser(){
    return JSON.stringify(this.userObject);
  }
  
}



