import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppUser } from 'src/app/core/entities/IUser';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  urlAccess: string;
  constructor(private http: HttpClient, private commonService: CommonService) {
  }
  getAll() {
    this.urlAccess = this.commonService.GetCoreServiceUrl() + 'Common/GetAPIUsers';
    return this.http.get<IAppUser[]>(this.urlAccess);
  }
  getAllById(id : any) {
    this.urlAccess = this.commonService.GetCoreServiceUrl() + 'Common/GetAPIUsersById?id='+id+'';
    return this.http.get<IAppUser[]>(this.urlAccess);
  }
}
