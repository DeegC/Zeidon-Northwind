import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { NorthwindService }     from './northwind.service';
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail.component';
import { ShippersComponent } from './shippers.component';
import { ShipperDetailComponent } from './shipper-detail.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';

@Component({
  selector: 'northwind-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Products']">Products</a>
        <a [routerLink]="['Orders']">Orders</a>
        <a [routerLink]="['Shippers']">Shippers</a>
      </nav>
      <router-outlet></router-outlet>
`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    NorthwindService
  ]
})
@RouteConfig([
{
    path: '/products',
    name: 'Products',
    component: ProductsComponent
},
{
    path: '/orders',
    name: 'Orders',
    component: OrdersComponent
},
{
    path: '/shippers',
    name: 'Shippers',
    component: ShippersComponent
},
{
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailComponent
},
{
    path: '/order/:id',
    name: 'OrderDetail',
    component: OrderDetailComponent
},
{
    path: '/shipper/:id',
    name: 'ShipperDetail',
    component: ShipperDetailComponent
}
])
export class AppComponent {
  title = 'Northwind with Zeidon';
}

