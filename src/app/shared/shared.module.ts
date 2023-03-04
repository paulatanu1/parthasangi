import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    HomeComponent  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
  ],
  exports:[MenubarModule,ButtonModule]
})
export class SharedModule { }
