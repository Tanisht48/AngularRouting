import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component'; // Adjust the path as per your project structure

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule],
  exports: [Feature1Component]
})
export class Feature1Module { }