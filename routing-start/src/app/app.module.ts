import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Module } from './feature2/feature2.module';
import { Feature1Module } from './feature1/feature1.module';

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  {
    path: 'feature1',
    loadChildren: () =>
      import('./feature1/feature1.module').then((m)=>m.Feature1Module)
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m)=>m.Feature2Module)
  },
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Feature2Module,
    Feature1Module
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
