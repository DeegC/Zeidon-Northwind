import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AppComponent }   from './app.component';
import { ZeidonConfiguration } from './zeidon';
import { ZeidonRestValues } from './zeidon-rest-client';
import { ZeidonRestConfiguration } from './zeidon-rest-client';
import { ErrorElementDirective }   from './zeidon-angular';

import { OrdersComponent } from './orders.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { OrderDetailComponent } from './order-detail.component';
import { NorthwindService } from './northwind.service';
import {PaginationComponent} from './pagination.component';

// If we are running under browserSync then we'll set the port number to be 8080.
// This makes it easier to switch back and forth between dev mode and running under Jetty.
let zeidonRestPort = window.location.port;
if ( (window as any).___browserSync___ ) {
  console.log("Running under browserSync");
  zeidonRestPort = "8080";  // Set port to be jetty running in different process.
}

const REST_VALUES: ZeidonRestValues = {
  restUrl: `http://${window.location.hostname}:${zeidonRestPort}/northwind`
};

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  DateValueAccessorModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      redirectTo: '/orders',
                      pathMatch: 'full'
                    },
                    {
                        path: 'orders',
                        component: OrdersComponent
                    },
                    {
                        path: 'order/:id',
                        component: OrderDetailComponent
                    },
                    {
                        path: 'products',
                        component: ProductsComponent
                    },
                    {
                        path: 'product/:id',
                        component: ProductDetailComponent
                    },
                  ])
   ],
  declarations: [ AppComponent,
                  OrdersComponent,
                  ProductsComponent,
                  PaginationComponent,
                  OrderDetailComponent,
                  ProductDetailComponent,
                  ErrorElementDirective ],
  providers: [ NorthwindService,
               { provide: ZeidonRestValues, useValue: REST_VALUES },
               { provide: ZeidonConfiguration, useClass: ZeidonRestConfiguration },
             ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // This constructor is required to force Angular injector to load the ZeidonConfiguration.
  constructor( private zeidonConfig: ZeidonConfiguration ) {}
}