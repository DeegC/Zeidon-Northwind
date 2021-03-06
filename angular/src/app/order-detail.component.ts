import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NorthwindService } from './northwind.service';
import { Customer} from './lod/Customer';
import { Order } from './lod/Order';
import { Employee } from './lod/Employee';
import * as zeidon from './zeidon-angular';

@Component({
  moduleId: module.id,
  selector: 'order-detail',
  templateUrl: 'order-detail.component.html',
  styleUrls: ['order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

    order: Order;
    customerList: Customer;
    employeeList: Employee;
    errorMessage: string;
    submitted = false;
    form: FormGroup;

    constructor(
        private _northwindService: NorthwindService,
        private _route:ActivatedRoute ) {
    }

    buildForm() {
        this.form = new zeidon.ZeidonFormBuilder().group( this.order.Order$ );
    }

    saveOrder( event ): void {
        console.log( JSON.stringify( this.form.value, null, 2 ) );
        this.order.Order$.update( this.form.value );
//        console.log( JSON.stringify( this.order.toZeidonMeta(), null, 2 ) );
        this.order.commit().then(order => {
            this.order = order;
            this.buildForm();
            window.history.back();
        });
    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        console.log( "OrderDetail init" );
        if ( id === 'NewOrder' ) {
            this.order = new Order();
            this.order.Order.create();
            this.buildForm();
        } else {
            Order.activate( { OrderId: id } ).then( order => {
                this.order = order;
                this.buildForm();
            } );
        }

        Customer.activate( { rootOnly: true } ).then( list => {
            this.customerList = list;
        } )

        Employee.activate( { rootOnly: true } ).then( list => {
            this.employeeList = list;
        } )
    }

    cancel(): void {
        window.history.back();
    }

    onCustomerSelected( customerIdx ): void {
        // Subtract 1 from idx to take into account the blank option.
        let customer = this.customerList.Customer[ customerIdx - 1 ];
        if ( this.order.Order$.Customer$ )
            this.order.Order$.Customer$.exclude();

        this.order.Order$.Customer.include( customer );
        this.buildForm();
    }

    onEmployeeSelected( employeeIdx ): void {
        // Subtract 1 from idx to take into account the blank option.
        let employee = this.employeeList.Employee[ employeeIdx - 1 ];
        if ( this.order.Order$.Employee$ )
            this.order.Order$.Employee$.exclude();

        this.order.Order$.Employee.include( employee );
        this.buildForm();
    }

    goBack() {
        window.history.back();
    }
}
