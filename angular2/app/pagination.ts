export class Pagination {
    currentPage: number = 1;
    totalPages: number = null;
    totalCount: number = null;
    pageSize: number = 20;

  constructor(
    private _parentComponent: any ) { }
    
    incrementPage() {
        let currentPage = Math.min( this.currentPage + 1, this.totalPages );
        if ( currentPage == this.currentPage )
            return false;

        this.currentPage = currentPage;
        return true;
    }
    
    decrementPage() {
        let currentPage = Math.max( this.currentPage - 1, 1 );
        if ( currentPage == this.currentPage )
            return false;

        this.currentPage = currentPage;
        return true;
    }
    
    getQueryParam() {
        let pageParam = "?page=" + this.currentPage + "&perPage=" + this.pageSize;
        if ( this.totalCount == null )
            pageParam += "&getTotal=true";
        
        return pageParam;
    }
    
    setFromResuts( json ) {
        if ( json.totalRootCount ) {
            this.totalCount = json.totalRootCount;
            this.totalPages = Math.floor( this.totalCount / 20 ) + 1;
        }
    }
    
    reset() {
        this.currentPage = 1;
        this.totalCount = null;  // Indicate that we need to retrieve the total count.
    }
    
    nextPage() {
        if ( this.incrementPage() )
            this._parentComponent.loadPage();
    }
    
    prevPage() {
        if ( this.decrementPage() )
            this._parentComponent.loadPage();
    }
    
    firstPage() {
        return this.currentPage == 1;
    }
    
    lastPage() {
        return this.currentPage == this.totalPages;
    }
}