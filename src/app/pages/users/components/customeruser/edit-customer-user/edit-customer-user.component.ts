import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';
import { AppUserService } from 'src/app/service/AppUser/app-user.service';
import { Http } from '@angular/http';
import { IAppUser } from 'src/app/core/entities/IUser';

@Component({
  selector: "app-edit-customer-user",
  templateUrl: "./edit-customer-user.component.html",
  styleUrls: ["./edit-customer-user.component.scss"]
})
export class EditCustomerUserComponent implements OnInit {
  parameter: any;
  /* User Variables */
  public users: IAppUser[];
  constructor(
    private route: ActivatedRoute,
    private userService: AppUserService,
    public http: Http
  ) {}

  selectedCompanies;
  companies: any[] = [];
  companiesNames = ["Uber", "Microsoft", "Flexigen"];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.parameter = params.get("id");
      console.log(this.parameter);
      this.getUserById(this.parameter);
    });

    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
  });
  }

  addTagFn(name) {
    return { name: name, tag: true };
  }

  /**
   * API call rest api call for get users
   */
  private getUserById(id: any) {
    return this.userService.getAllById(id).subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
