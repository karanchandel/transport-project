import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {  FormControl ,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-list-of-consignment',
  templateUrl: './add-list-of-consignment.component.html',
  styleUrls: ['./add-list-of-consignment.component.scss']
})
export class AddListOfConsignmentComponent implements OnInit {
  currentComponent: any;
  billityForm!: FormGroup;
  packageTypes: string[] = ['Type1', 'Type2', 'Type3'];
  weightTypes: string[] = ['K.G', 'Lbs', 'Ton'];
  gstOptions: string[] = ['5%', '10%', '15%'];
  rateOptions: string[] = ['Option1', 'Option2', 'Option3'];
  formSubmissions: any[] = [];

  constructor(public dialogReff: MatDialogRef<AddListOfConsignmentComponent>,private router: Router, private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    let currentUrl = this.router.url.split('/');
    let lengthOfUrl = this.router.url.split('/').length;

    this.currentComponent = currentUrl[lengthOfUrl - 1];
    this.initForm();
  }

  initForm(): void {
    this.billityForm = this.fb.group({
      quantity: new FormControl("", [Validators.required]),
      
      packageType: new FormControl("", [Validators.required]),
      productDetails:new FormControl("", [Validators.required]),
      hsn: new FormControl("", [Validators.required]),
      actualWeight:new FormControl("", [Validators.required]),
      grossWeight:new FormControl("", [Validators.required]),
      weightType:new FormControl("", [Validators.required]),
      gst:new FormControl("", [Validators.required]),
      rap:new FormControl("", [Validators.required]),
      action: new FormControl("", [Validators.required]),
      Rate:new FormControl("", [Validators.required]),
    });
  }

  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`]);
  }

  onSubmit(): void {
    if (this.billityForm.valid) {
      this.formSubmissions.push(this.billityForm.value);
      console.log('Form submitted:', this.billityForm.value);
      console.log('All Form Submissions:', this.formSubmissions);
      this.billityForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  closeButton(type: any | undefined) {
    if (type == 'simple') {
      this.dialogReff.close();
    } else {
      this.dialogReff.close("I am closed!!")
    }
  }

  onDropdownChange(event: any, controlName: string): void {
    console.log(`Dropdown "${controlName}" selected value:`, event.value);
  }
}
