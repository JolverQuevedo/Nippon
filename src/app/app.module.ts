import { ArticulosService } from './providers/articulos.service';
import { LoginGuard } from './guards/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatGridListModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatListModule } from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ArticulosListComponent } from './components/articulos-list/articulos-list.component';
import { DataTablesModule } from 'angular-datatables';
import { DrawerComponent } from './components/drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    LoginComponent,
    HomeComponent,
    ArticulosListComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    DataTablesModule
  ],
  providers: [LoginGuard, ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
