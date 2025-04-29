import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'home', component:HomeComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent },
  {path:'movies', component:MoviesComponent },
  {path:'movie', component:MovieComponent },
  {path:'users', component:UsersComponent },
  {path:'user', component:UserComponent },
  {path:'**', component:NotFoundComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }


