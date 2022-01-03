import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormarraycomponentComponent } from './formarraycomponent/formarraycomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    FormarraycomponentComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
