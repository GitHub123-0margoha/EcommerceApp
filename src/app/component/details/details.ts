import { ApiProducts } from './../../services/api-products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { GetPrdById } from '../../services/get-prd-by-id';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details implements OnInit {
  productId!: number;
  product!: Iproduct | null;

  idsArr: number[] = [];
  currentId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _getPrdById: GetPrdById,
    private _apiPrd: ApiProducts,
    private _location: Location
  ) {
    this.idsArr = this._getPrdById.mapProdToId();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (!idParam) {
        return;
      }

      const parsedId = Number(idParam);
      if (isNaN(parsedId)) {
        return;
      }

      this.currentId = parsedId;
      this.productId = parsedId;

      this._apiPrd.getPrdById(this.currentId).subscribe({
        next: (res) => {
          this.product = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    });
}


  goBack() {
    this._location.back();
  }

  prev() {
    let currentIdIndex = this.idsArr.findIndex(id => id === this.currentId);
    if (currentIdIndex > 0) {
      this.router.navigateByUrl(`/details/${this.idsArr[currentIdIndex - 1]}`);
    }
  }

  next() {
    let currentIdIndex = this.idsArr.findIndex(id => id === this.currentId);
    if (currentIdIndex < this.idsArr.length - 1) {
      this.router.navigateByUrl(`/details/${this.idsArr[currentIdIndex + 1]}`);
    }
  }
}
