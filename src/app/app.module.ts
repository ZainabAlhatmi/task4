import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
    import { DropdownModule } from "primeng/dropdown";
    import { ButtonModule } from 'primeng/button';
    import { RadioButtonModule } from 'primeng/radiobutton';
import { UserComponent } from './user/user.component';
    

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule ,
    RadioButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Question{
  constructor(public text:string,public options:string[]){}
}
