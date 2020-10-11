import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule)
  },

  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
