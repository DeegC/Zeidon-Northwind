import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core';
import {ShipperDetailComponent} from './shipper-detail.component';
import {Shipper} from './Shipper';
import {Pagination} from './zeidon';

@Component({
    selector: 'shippers',
    templateUrl:'app/shippers.component.html',
    styleUrls: ['app/shippers.component.css']
})
export class ShippersComponent implements OnInit {

    shippers: Shipper;
    selectedShipper: Shipper;
    pagination: Pagination = new Pagination();

  constructor(
    private _router: Router) { }

    getShippers() {
        Shipper.activate(
            {
                pagination: this.pagination,
                rootOnly: true,
                readOnly: true
            } ).subscribe( shippers =>
            {
                console.log( "Got shippers" );
                this.shippers = shippers;
            } );
    }

    addShipper( name: string ) {
        if ( !name ) {
            return;
        }

        let newShipper = new Shipper;
        newShipper.Shipper.create();
        newShipper.Shipper$.CompanyName = name;
        newShipper.commit();
    }

    ngOnInit() {
        this.getShippers();
    }

    // Called from Pagination to load page.
    loadPage() {
        this.getShippers();
    }

    gotoDetail( shipper: Shipper ) {
        this.selectedShipper = shipper;
        this._router.navigate(['ShipperDetail', { id: this.selectedShipper.Shipper$.ShipperId }]);
    }
}

