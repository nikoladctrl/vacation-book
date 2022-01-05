import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    // NgxBootstrapIconsModule.pick({})
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
