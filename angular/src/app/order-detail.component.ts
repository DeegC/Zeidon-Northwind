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
export class OrderDetailComponent implements OnInit, OnChanges {

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

    ngOnChanges(changes: SimpleChanges) {
        console.log( "ngOnChanges for order" );
        this.buildForm();
    }

    buildForm() {
        this.form = new zeidon.ZeidonFormBuilder().group( this.order.Order$ );
    }

    saveOrder( event ): void {
        this.order.Order$.update( this.form.value );
        this.order.commit().subscribe(order => {
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
            Order.activate( { OrderId: id } ).subscribe( order => {
                this.order = order;
                this.buildForm();
            } );
        }

        Customer.activate( { rootOnly: true } ).subscribe( list => {
            this.customerList = list;
        } )

        Employee.activate( { rootOnly: true } ).subscribe( list => {
            this.employeeList = list;
        } )
    }

    cancel(): void {
        window.history.back();
    }

    onCustomerSelected( customerIdx ): void {
        let customer = this.customerList.Customer[ customerIdx ];
        if ( this.order.Order$.Customer$ )
            this.order.Order$.Customer$.exclude();

        this.order.Order$.Customer.include( customer );
        this.buildForm();
    }

    onEmployeeSelected( employeeIdx ): void {
        let employee = this.employeeList.Employee[ employeeIdx ];
        if ( this.order.Order$.Employee$ )
            this.order.Order$.Employee$.exclude();

        this.order.Order$.Employee.include( employee );
        this.buildForm();
    }

    goBack() {
        window.history.back();
    }
}

