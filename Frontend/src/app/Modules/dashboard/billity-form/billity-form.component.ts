import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billity-form',
  templateUrl: './billity-form.component.html',
  styleUrls: ['./billity-form.component.scss']
})
export class BillityFormComponent implements OnInit {
  currentComponent: any;
  billityForm: FormGroup = this.fb.group({}); // Initialize the form group
  packageTypes: string[] = ['Type1', 'Type2', 'Type3']; // Add your package types
  weightTypes: string[] = ['K.G', 'Lbs', 'Ton']; // Add your weight types
  gstOptions: string[] = ['5%', '10%', '15%']; // Add your GST options
  rateOptions: string[] = ['Option1', 'Option2', 'Option3'];
  formSubmissions: any[] = [];

  constructor(private router: Router, private fb: FormBuilder) {}

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
      // Push form values into the array
      this.formSubmissions.push(this.billityForm.value);

      // Log the form submissions
      console.log('Form submitted:', this.billityForm.value);
      console.log('All Form Submissions:', this.formSubmissions);

      // You can also reset the form if needed
      this.billityForm.reset();
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }

  onDropdownChange(event: any, controlName: string): void {
    // Handle dropdown changes if needed
    console.log(`Dropdown "${controlName}" selected value:`, event.value);
  }
}
