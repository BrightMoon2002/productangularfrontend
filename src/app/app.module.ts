import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { DetailComponent } from './detail/detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {HomePComponent} from './home-p/home-p.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment.prod';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import { ChangeAvatarComponent } from './change/change-avatar/change-avatar.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'delete/:id',
    component: DeleteProductComponent
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent
  },
  {
    path: 'home1',
    component: HomePComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, DetailComponent, ProductListComponent, CreateProductComponent, DeleteProductComponent, UpdateProductComponent, HomePComponent, DialogComponent, UploadAvatarComponent, ChangeAvatarComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatDialogModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, ReactiveFormsModule, FormsModule, MatDatepickerModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
