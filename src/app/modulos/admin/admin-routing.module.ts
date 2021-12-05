import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './usuarios/create/create.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { GetComponent } from './usuarios/get/get.component';

const routes: Routes = [
  {    // enrutamiento del modelo: Usuario para los componentes:"create","edit","get" 
    path: 'create', 
    component: CreateComponent,
    },{
    path: 'edit',
    component: EditComponent,
  },{
    path: 'get',
    component: GetComponent,
    },{
    path: '',
    redirectTo: 'get'
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
