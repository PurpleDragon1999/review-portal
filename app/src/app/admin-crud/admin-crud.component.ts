import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.scss']
})
export class AdminCrudComponent implements OnInit {
  name = 'Angular';
  page = 1;
  pageSize = 10;
  items = [];
  usersArray =[];

  constructor(private _service: ServicesService, private _router: Router) { }

  

  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers(){
    this._service.showAllEmployees().subscribe(res => {
      if(res.status == 200){
        this.usersArray = res.body;
        console.log(this.usersArray);
      }
      else if(res.status == 401){
        localStorage.removeItem("JwtHrms");
        this._router.navigate(['/login']);
      }
    });

    // if (this.usersArray.length < 11) {
    //   document.getElementById('pageNo').style.visibility = "hidden"; 
    // }
  }

}


