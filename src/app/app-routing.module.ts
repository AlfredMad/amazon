import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    },
    {
    path: '',
    pathMatch: 'full',  
    redirectTo: '/index'
    },{
    // Adicionamos el enrutamiento perezoso, 
    // significa que primero cargan los componentes principales
    // y después, a medida que se van solicitando cargan los "componente hijos":
      path: 'seguridad',     // Para cualquier gestión de seguridad el programa 
                           // se ENRUTA al Módulo de seguridad: m.SeguridadModule
      loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },{
    path: 'admin',
      loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
    },
    { 
    path: 'encomiendas',
      loadChildren: () => import('./modulos/encomiendas/encomiendas.module').then(m => m.EncomiendasModule)
      },

    {
    path: 'error',
    component: ErrorComponent,
    },{
    path: '**',
    redirectTo: '/error'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
