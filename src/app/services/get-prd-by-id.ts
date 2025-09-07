import { Icategory } from './../models/icategory';
import { Iproduct } from '../models/iproduct';
import { Product } from './../component/product/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPrdById {
  products: Iproduct[];
  categories: Icategory[];

  constructor() {
    this.products = [
      {
        id:1,
        name:"Dogs",
        price: 50000,
        quantity: 10,
        imgUrl: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
        catId: 1
      },
      {
        id:2,
        name:"Dogs",
        price: 60000,
        quantity: 1,
        imgUrl: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
        catId: 1
      },
      {
        id:3,
        name:"Dogs",
        price: 70000,
        quantity: 0,
        imgUrl: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
        catId: 1
      },

      {
        id:4,
        name:"laptop",
        price: 40000,
        quantity: 5,
        imgUrl: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        catId: 2
      },
      {
        id:5,
        name:"laptop",
        price: 10000,
        quantity: 1,
        imgUrl: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        catId: 2
      },
      {
        id:6,
        name:"laptop",
        price: 100000,
        quantity: 8,
        imgUrl: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        catId: 2
      },

      {
        id:7,
        name:"Camera",
        price: 25000,
        quantity: 0,
        imgUrl: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
        catId: 3
      },
      {
        id:8,
        name:"Camera",
        price: 23000,
        quantity: 1,
        imgUrl: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
        catId: 3
      },
      {
        id:9,
        name:"Camera",
        price: 25000,
        quantity: 15,
        imgUrl: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
        catId: 3
      },
    ],

    this.categories = [
      {
        id: 1,
        name: "Dogs"
      },
      {
        id: 2,
        name: "Laptops"
      },
      {
        id: 3,
        name: "Cameras"
      }
    ];
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(id:number): Iproduct | null {
    const product = this.products.find((prd) => prd.id == id);
    return product ? product : null;
  }

  getAllCategories(): Icategory[] {
  return this.categories;
  }
  getAllCategoriesId(id:number): Icategory[] {
    return this.categories.filter((cat) => cat.id == id);
  }

  mapProdToId(): number[] {
  return this.products
    .map(prd => prd.id)
    .filter((id): id is number => id !== undefined);
  }
}
