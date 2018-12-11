import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  template: `
  <mat-drawer-container class="container" autosize>
  <mat-drawer #drawer class="sidenav" opened mode="side" >
  <mat-list>
    <mat-list-item>Home</mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>Articulos</mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>Pedidos</mat-list-item>
  </mat-list>


  </mat-drawer>

  <div class="example-sidenav-content">
    <mat-toolbar color="primary" class="mat-elevation-z4">
      <button type="button" mat-icon-button (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Nippon</span>
    </mat-toolbar>
    <div style="padding:2rem"><router-outlet></router-outlet></div>
  </div>

</mat-drawer-container>

  `,
  styles: [`
    .sidenav{
      min-width:200px;
    }
    .btn-drawer{
      padding:0;
      margin:0;
      border-radius:0 !important;
    }
  `]
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
