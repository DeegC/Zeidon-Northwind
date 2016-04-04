import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { NorthwindService } from './northwind.service';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'shipper-detail',
  templateUrl: 'app/shipper-detail.component.html',
  styleUrls: ['app/shipper-detail.component.css']
})
export class ShipperDetailComponent implements OnInit {
        
    shipper: any;
    errorMessage: string;

    constructor(
        private _northwindService: NorthwindService,
        private _routeParams: RouteParams ) {
    }

    ngOnInit() {
        let id = +this._routeParams.get( 'id' );
        console.log( "ShipperDetail init" );

        this._northwindService.getShipper( id )
            .subscribe(
            shipper => this.shipper = shipper,
            error => this.errorMessage = <any>error );
    }

    onSubmit() {
        console.log( JSON.stringify( this.shipper, null, 2 ) );
        this._northwindService.commitShipper( this.shipper )
            .subscribe( shipper => {},
                        error => this.errorMessage = <any>error );
    }
    
    goBack() {
        window.history.back();
    }
}

