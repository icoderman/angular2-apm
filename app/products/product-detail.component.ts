import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl : "app/products/product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle : string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        // +.this -- js shortcut for converting string to the numberic id
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}