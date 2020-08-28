import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule, MatDialogModule
  ],
  exports: [MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule,
    FlexLayoutModule,   MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule, MatInputModule, MatSelectModule, MatDialogModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlbumDetailModule { }
