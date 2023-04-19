import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase4RutaComponent } from './clase4Ruta/clase4Ruta.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  // ruta por defecto
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ruta',
    component: Clase4RutaComponent
  },
  // Establecer en las rutas el paso del parametro especifico de la descripcion del producto.
  {
    path: 'detalle/:id',
    component: DetalleComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
