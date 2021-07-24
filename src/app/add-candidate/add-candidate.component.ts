import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDto } from './UserDto';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  addUser: boolean = false;
  editUser: boolean = false;
  addUserForm: FormGroup;
  add: boolean = true;
  addUserShowHide: boolean = true;
  userObj: UserDto = new UserDto();
  usersList: UserDto[] = new Array();

  constructor() {}

  ngOnInit() {
    this.add = true;
    this.addUserShowHide = true;
    this.addUser = true;
    this.editUser = false;
    this.firstName = '';
    this.lastName = '';
    this.email = '';

    // this.service.getUserList().subscribe((obj: any) => {
    //   this.usersList = obj.Data;
    // });
  }

  saveUser() {
    this.userObj = new UserDto();
    this.userObj.FIRST_NAME = this.addUserForm.value.firstName;
    this.userObj.LAST_NAME = this.addUserForm.value.lastName;
    this.userObj.email = this.addUserForm.value.email;
    this.usersList = this.usersList;
    // this.service.saveUser(this.userObj).subscribe((obj: any) => {
    //   if (obj.ResponseCode == 200) {
    //     this.service.getUserList().subscribe((obj: any) => {
    //       this.usersList = obj.Data;
    //       this.dataSource.data = this.usersList;
    //     });
    //     //   ("add user successful");
    //   } else {
    //     //   ("add not successful");
    //   }
    // });
  }
}
