import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    let currentUrl = this.router.url.split('/');
    let lengthOfUrl = this.router.url.split('/').length;

    this.currentComponent = currentUrl[lengthOfUrl - 1];
    this.initForm();
  }

  initForm(): void {
    this.billityForm = this.fb.group({
      quantity: [''],
      packageType: [''],
      productDetails: [''],
      hsn: [''],
      actualWeight: [''],
      grossWeight: [''],
      weightType: [''],
      gst: [''],
      rap: [''],
      action: ['']
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

 

  onDropdownChange(event: any, controlName: string): void {
    console.log(`Dropdown "${controlName}" selected value:`, event.value);
  }
}
