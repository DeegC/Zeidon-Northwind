import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {ShipperDetailComponent} from './shipper-detail.component';

@Component({
    selector: 'shippers',
    templateUrl:'app/shippers.component.html',
    styleUrls: ['app/shippers.component.css']
})
export class ShippersComponent implements OnInit {

    errorMessage: string;
    shippers: any[];
    selectedShipper: any;

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) { }

    getShippers() {
        this._northwindService.getShippers()
                     .then(
                          shippers => this.shippers = shippers,
                          error =>  this.errorMessage = <any>error);
    }
    
    addShipper( name: string ) {
        if ( !name ) { return; }
        this._northwindService.addShipper( name )
            .then( shipper => this.shippers.push( shipper ),
                   error => this.errorMessage = <any>error );
    }

    ngOnInit() {
        this.getShippers();
    }

    gotoDetail( shipper: any ) {
        this.selectedShipper = shipper;
        this._router.navigate(['ShipperDetail', { id: this.selectedShipper.ShipperId }]);
    }
}

