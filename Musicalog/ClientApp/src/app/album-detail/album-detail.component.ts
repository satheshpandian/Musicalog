import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Album } from '../album';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AlbumType } from '../albumtype';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  private apiService: ApiService;
  public album: Album;
  public albumForm: FormGroup;
  public selected = 'vinyl';
  public CreateNew: boolean;
  private dialogConfig;
  constructor(private location: Location, private activateRoute: ActivatedRoute, apiService: ApiService, private dialog: MatDialog) {
    this.apiService = apiService;
    this.dialog = this.dialogConfig;
  }
  ngOnInit(): void {
    this.CreateNew = true;
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
    const id: number = this.activateRoute.snapshot.params['id'];
    this.albumForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      artist: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      label: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      stock: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      type: new FormControl('vinyl'),
      id: new FormControl('id')
    });
    this.getAlbumById(id);
  }

  getAlbumById(id: number) {
    console.log('getAlbumById:' + id);
    this.apiService.getAlbums('albumapi/' + id).subscribe((res: Album) => {
      this.album = res;
      this.albumForm.patchValue(this.album);
      this.CreateNew = false;
      this.selected = this.album.Type === AlbumType.Vinyl ? 'vinyl' : this.album.Type === AlbumType.CD ? 'cd' : '';
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.albumForm.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }

  public createAlbum = (albumForm) => {
    console.log('createAlbum');
    if (this.albumForm.valid) {
      const updateAlbum: Album = {
        ID: albumForm.id,
        Name: albumForm.name,
        Artist: albumForm.artist,
        Label: albumForm.label,
        Stock: albumForm.stock,
        Type: albumForm.type === 'vinyl' ? 1 : 2
      };
      this.apiService.updateAlbumDetails('albumapi', updateAlbum)
      .subscribe(res => {
        const dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
        (error => {
          // temporary as well
          this.location.back();
        }));
    }
  }
}
