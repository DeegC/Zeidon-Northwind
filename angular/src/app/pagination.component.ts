import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Pagination} from './zeidon';

@Component({
    selector: 'pagination',
    inputs: ['pagination'],
    template: `
        Page {{pagination.currentPage}} of {{pagination.totalPages}} ({{pagination.totalCount}} total)
        <button [disabled]="pagination.firstPage()" (click)="prevPage()">Prev</button>
        <button [disabled]="pagination.lastPage()"  (click)="nextPage()">Next</button>
`
})
export class PaginationComponent {
    @Input() pagination: Pagination;
    @Output() reloadPage = new EventEmitter();

    nextPage() {
        if ( this.pagination.incrementPage() )
            this.reloadPage.emit();
    }

    prevPage() {
        if ( this.pagination.decrementPage() )
            this.reloadPage.emit();
    }
}