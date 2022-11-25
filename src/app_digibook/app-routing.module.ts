import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CompBookComponent} from './comp-book/comp-book.component';
import { BlockbookComponent } from './blockbook/blockbook.component';
import { UpdatereaderComponent } from './updatereader/updatereader.component';
import { UpdateRequestComponent } from './update_request/update_request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyinfoComponent } from './myinfo/myinfo.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },



  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'comp-book', component: CompBookComponent },
  { path: 'update_request', component: UpdateRequestComponent },

   { path: 'blockbook', component: BlockbookComponent },
  { path: 'updatereader', component: UpdatereaderComponent },
  { path: 'myinfo', component: MyinfoComponent },
  // { path: ' comp-book-update', component: CompBookUpdateComponent },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
