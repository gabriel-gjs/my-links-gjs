import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurriculoPdfComponent } from './components/curriculo-pdf/curriculo-pdf.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: 'curriculo', component: CurriculoPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
