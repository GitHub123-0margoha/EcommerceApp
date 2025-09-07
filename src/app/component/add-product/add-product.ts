import { Icategory } from './../../models/icategory';
import { Iproduct } from './../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiProducts } from '../../services/api-products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit {

  newPrd: Iproduct = {
    name: '',
    price: 0,
    quantity: 0,
    imgUrl: '',
    catId: 0
  };

  categories: Icategory[] = [];
  editMode: boolean = false;

  constructor(
    private _apiPrd: ApiProducts,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // جلب كل التصنيفات
    this._apiPrd.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

    // التحقق إذا كنا في وضع التعديل
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this._apiPrd.getPrdById(+id).subscribe({
        next: (res) => {
          this.newPrd = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  addNewPrd() {
    this._apiPrd.addPrd(this.newPrd).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.router.navigateByUrl('/products');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updatePrd() {
    this._apiPrd.updatePrd(this.newPrd.id!, this.newPrd).subscribe({
      next: () => {
        alert('Product updated successfully!');
        this.router.navigateByUrl('/products');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newPrd.imgUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
