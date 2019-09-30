import { Component , OnInit } from '@angular/core';
import {course} from './list';
import {operators} from './list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {SelectItem} from 'primeng/api';

import {ServiceService} from './service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title: string = 'Demo Test';
  Courses: any[];

  Operators: any[];



  // selectedcourses: Course[] = [];
  // selectedoperators: Operator[] = [];

  lable: string;
  value: any;

  advanceFilterForm: FormGroup;
 

  constructor(private service: ServiceService, private formBuilder: FormBuilder) {

    this.advanceFilterForm = this.formBuilder.group({
      operators: ['', Validators.required],
      courses: ['', Validators.required],
      txtValue: ['', Validators.required]
    });
     
  }

  ngOnInit() {
    
    this.Courses = this.service.getCheckBoxData();
    this.Operators = this.service.getListBoxData();
  }

  Submit() {
    console.log(this.advanceFilterForm.get('courses').value);
    console.log(this.advanceFilterForm.get('operators').value);
    



    this.lable = "";
    if (this.advanceFilterForm.get('courses').value == "" || this.advanceFilterForm.get('operators').value == "") {
      if (this.advanceFilterForm.get('courses').value == "") {
        this.lable = "Please Select the course";
      }
      else {
        this.lable = "Please Select the operator";
      }
    }
    else if (this.advanceFilterForm.get('courses').value.length > 0) {
      if (this.advanceFilterForm.get('txtValue').value == "") {
        this.lable = "Please enter the value in the text field";
      }
      else if (this.advanceFilterForm.get('courses').value.length > 1) {
        if (this.advanceFilterForm.get('operators').value.code == "EQ" || this.advanceFilterForm.get('operators').value.code == "NEQ") {
          this.lable = "Match Invalid";
        }
        else {
          this.lable = "Success";
          var lstcourse = "";
          for (var i = 0; i < this.advanceFilterForm.get('courses').value.length; i++) {
            if (lstcourse == "") {
              lstcourse = this.advanceFilterForm.get('courses').value[i].name;
            }
            else {
              lstcourse = lstcourse + ", " + " " + this.advanceFilterForm.get('courses').value[i].name;
            }
          }
          this.lable = "Selected Courses: " + lstcourse + " Operators: " + this.advanceFilterForm.get('operators').value.name + " Value: " + this.advanceFilterForm.get('txtValue').value;
        }
      }
      else {
        var lstcourse = "";
        for (var i = 0; i < this.advanceFilterForm.get('courses').value.length ; i++) {
          if (lstcourse == "") {
            lstcourse = this.advanceFilterForm.get('courses').value[i].name;
          }
          else {
            lstcourse = lstcourse + ", " + this.advanceFilterForm.get('courses').value[i].name;
          }
        }
        this.lable = "SelectedCourses: " + lstcourse + ". Operators: " + this.advanceFilterForm.get('operators').value.name + " Value: " + this.advanceFilterForm.get('txtValue').value;
      }

    }
  }
}
