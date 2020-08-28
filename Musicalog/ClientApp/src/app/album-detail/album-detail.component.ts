import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Album } from '../album';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AlbumType } from '../albumtype';

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
  showMsg = false;
  constructor(private router: Router, private location: Location, private activateRoute: ActivatedRoute, apiService: ApiService) {
    this.apiService = apiService;
  }
  ngOnInit(): void {
    this.CreateNew = true;
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
       console.log('updateAlbumDetails');
       this.showMsg = true;
       setTimeout (() => {
        this.showMsg = false;
        this.router.navigate(['/album-list']);
     }, 1000);
      },
        (error => {
          // temporary as well
          this.location.back();
        }));
    }
  }
}
