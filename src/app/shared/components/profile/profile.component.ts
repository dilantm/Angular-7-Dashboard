import { Component, OnInit, Input } from '@angular/core';
import { IAppUser } from 'src/app/core/entities/IUser';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';
  
  @Input() user: IAppUser;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
