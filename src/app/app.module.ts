import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
// import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      progressBar:true,
      closeButton:true,
      tapToDismiss:true,
      progressAnimation:'increasing',
      newestOnTop:true,
      toastClass:'toastr',
    }),
  
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
