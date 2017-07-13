import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { NorthwindService } from './northwind.service';
import {Order} from './Order';
import * as zeidon from './zeidon-angular';

@Component({
  moduleId: module.id,
  selector: 'order-detail',
  templateUrl: 'order-detail.component.html',
  styleUrls: ['order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnChanges {

    order: Order;
    errorMessage: string;
    submitted = false;
    form: FormGroup;

    constructor(
        private _northwindService: NorthwindService,
        private _route:ActivatedRoute ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log( "ngOnChanges for order" );
        this.buildForm();
    }

    buildForm() {
        this.form = new zeidon.ZeidonFormBuilder().group( this.order.Order$ );
    }

    saveOrder( event ): void {
        this.order.commit().subscribe(order => {
            this.order = order;
            this.buildForm();
        });
    }

    ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        console.log( "OrderDetail init" );
        Order.activate().subscribe( order => {
            this.order = order;
            this.buildForm();
            console.log( "Loaded order" );
        } );
    }

    onSubmit() {
        console.log( "Submitted" );
        console.log( JSON.stringify( this.order, null, 2 ) );
        this.submitted = true;
    }

    cancel(): void {
        // Reload the order
        this.ngOnInit();
    }

    goBack() {
        window.history.back();
    }
}

