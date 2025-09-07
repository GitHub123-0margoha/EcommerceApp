import { ApiProducts } from './../../services/api-products';
import { CommonModule } from '@angular/common';
import { Iproduct } from './../../models/iproduct';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { Roundborder } from '../../directives/roundborder';
import { BgColor } from '../../directives/bg-color';
import { GetPrdById } from '../../services/get-prd-by-id';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule , Roundborder , BgColor, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {
  totalPrice: number = 0;
  productList: Iproduct[] = [];
  selectedProduct: Iproduct | null = null;

  categories: Icategory[] = [];
  selectedCatId: number = 0;

  constructor(private _apiPrd: ApiProducts) {}

  ngOnInit(): void {
    this._apiPrd.getAllProducts().subscribe({
      next: (res) => this.productList = res,
      error: (err) => console.log(err)
    });

    this._apiPrd.getAllCategories().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.log(err)
    });
  }

  filterByCategory() {
    if (this.selectedCatId == 0) {
      this._apiPrd.getAllProducts().subscribe({
        next: (res) => this.productList = res,
        error: (err) => console.error(err)
      });
    } else {
      this._apiPrd.getPrdByCatId(this.selectedCatId).subscribe({
        next: (res) => this.productList = res,
        error: (err) => console.error(err)
      });
    }
  }

  buy(pro: Iproduct) {
    if (pro.quantity > 0) {
      this.totalPrice += pro.price;
      pro.quantity--;
    }
  }

  deleteProduct(productId: number) {
    this._apiPrd.deletePrd(productId).subscribe({
      next: () => {
        this.productList = this.productList.filter(pro => pro.id !== productId);
      },
      error: (err) => console.error(err)
    });
  }


}
