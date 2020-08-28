import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Album } from '../album';
import { ApiService } from '../core/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-album',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'artist', 'type', 'stock', 'details', 'remove'];
  public dataSource = new MatTableDataSource<Album>();
public pageSize: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(AlbumDetailComponent, { static: true }) albumDetailComponent: AlbumDetailComponent;
  private apiService: ApiService;

  constructor( private router: Router, apiService: ApiService) {
    this.apiService = apiService;
    console.log('constructor');
  }
  ngOnInit(): void {
    this.getPageSize();
    this.getAlbums();
  }

  getAlbums() {
    this.apiService.getAlbums('albumapi').subscribe((res: Album[]) => {
      this.dataSource.data = res;
    });
  }

  getPageSize() {
    this.apiService.getAlbums('applicationsettings').subscribe((res: number) => {
      this.pageSize = res;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public albumDetailScreen = (id: number) => {
    this.router.navigate(['/album-detail', { id: id }]);
  }

}
