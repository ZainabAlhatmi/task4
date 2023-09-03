import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{component:QuestionnaireComponent,path:'oues'},
{component:UserComponent,path:'user'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
