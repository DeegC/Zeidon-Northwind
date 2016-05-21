import {Component, Input} from '@angular/core';
import {Pagination} from './pagination';

@Component({
    selector: 'pagination',
    inputs: ['pagination'],
    template: `
        Page {{pagination.currentPage}} of {{pagination.totalPages}} ({{pagination.totalCount}} total)
        <button [disabled]="pagination.firstPage()" (click)="pagination.prevPage()">Prev</button>
        <button [disabled]="pagination.lastPage()"  (click)="pagination.nextPage()">Next</button>
`
})
export class PaginationComponent {
    @Input() pagination: Pagination;
}