import { Component } from '@angular/core';

@Component({
  selector: 'northwind-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/products" routerLinkActive="active">Products</a>
        <a routerLink="/orders" routerLinkActive="active">Orders</a>
        <a routerLink="/shippers" routerLinkActive="active">Shippers</a>
      </nav>
      <router-outlet></router-outlet>
`,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Northwind with Zeidon';
}
