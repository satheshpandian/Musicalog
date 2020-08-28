import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumDetailGuard } from './album-detail.guard';




const routes: Routes = [
  {
    path: 'album-list',
    component: AlbumListComponent
  },
  {
    path: 'album-detail',
    component: AlbumDetailComponent,
    canActivate: [AlbumDetailGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
