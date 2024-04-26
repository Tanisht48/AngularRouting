// feature2.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component'; // Adjust the path as per your project structure

@NgModule({
  declarations: [Feature2Component],
  imports: [CommonModule],
  exports: [Feature2Component]
})
export class Feature2Module { }