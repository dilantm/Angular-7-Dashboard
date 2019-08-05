import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

   /* pagination Info */
   pageSize = 10;
   pageNumber = 1;
   
  constructor() { }

  ngOnInit() {
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
