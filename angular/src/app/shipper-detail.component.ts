import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Shipper} from './lod/Shipper';
import { FormGroup, Validators } from '@angular/forms';
import * as zeidon from './zeidon-angular';

@Component({
  selector: 'shipper-detail',
  templateUrl: 'app/shipper-detail.component.html',
  styleUrls: ['app/shipper-detail.component.css']
})
export class ShipperDetailComponent implements OnInit {

    shipper: Shipper;
    form: FormGroup;

    constructor( private _route: ActivatedRoute ) { }

    ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        Shipper.activate( { ShipperId: id } ).subscribe( shipper => {
            this.shipper = shipper;
            this.buildForm();
            console.log( "Loaded shipper" );
        } );
    }

    buildForm() {
        this.form = new zeidon.ZeidonFormBuilder().group( this.shipper.Shipper$ );
    }

    saveShipper( event ) {
        this.shipper.Shipper$.update( this.form.value );
        this.shipper.commit().subscribe(shipper => {
            this.shipper = shipper;
            this.buildForm();
            window.history.back();
        });
    }

    cancel() {
        window.history.back();
    }
}
