import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
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
  gender: String = '-1';
  addUser: boolean = false;
  editUser: boolean = false;
  addUserForm: FormGroup;
  add: boolean = true;
  addUserShowHide: boolean = true;
  userObj: UserDto = new UserDto();
  usersList: UserDto[] = new Array();

  constructor(public formbuilder: FormBuilder) {
    this.addUserForm = this.formbuilder.group({
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(25)])
      ],
      lastName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(25)])
      ],
      email: ['', Validators.required],
      gender: ['-1']
    });
  }

  ngOnInit() {
    this.add = true;
    this.addUserShowHide = true;
    this.addUser = true;
    this.editUser = false;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = '-1';
  }

  saveUser() {
    this.userObj = new UserDto();
    this.userObj.FIRST_NAME = this.addUserForm.value.firstName;
    this.userObj.LAST_NAME = this.addUserForm.value.lastName;
    this.userObj.email = this.addUserForm.value.email;
    this.userObj.gender = this.addUserForm.value.gender;
    this.usersList.push(this.userObj);

    console.log(JSON.stringify(this.usersList));

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = '-1';
  }
}
