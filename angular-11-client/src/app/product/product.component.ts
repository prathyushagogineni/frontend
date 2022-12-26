import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './Product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [];
  constructor(private productService: ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

  search(str: string) {
    this.productService.findByNameContaining(str).subscribe((data) => {
      this.products = data;
    });
  }

listProducts() {
console.log(this.route.snapshot.paramMap.get('id'));
    // check if "id" parameter is available
      this.getProducts();

  }
}