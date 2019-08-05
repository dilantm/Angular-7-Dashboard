import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IAppUser } from 'src/app/core/entities/IUser';
import { AppUserService } from 'src/app/service/AppUser/app-user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customeruser',
  templateUrl: './customeruser.component.html',
  styleUrls: ['./customeruser.component.scss']
})
export class CustomeruserComponent implements OnInit {

  /* User Variables */
  users: IAppUser[] = [];
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private userService: AppUserService,public http: Http) { }

  ngOnInit() {
    this.getAllUsers();
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  /**
	* API call rest api call for get users
	*/
  private getAllUsers() {
    return this.userService.getAll().subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }
  
}
