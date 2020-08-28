import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator } from '@angular/material/paginator';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumListModule } from './album-list/album-list.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumDetailModule } from './album-detail/album-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    MatPaginator,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AlbumListComponent }
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    AlbumListModule,
    AlbumDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
