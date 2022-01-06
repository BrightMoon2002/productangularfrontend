import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Builder} from 'protractor';
import {FormBuilder, Validators} from '@angular/forms';
import {Product} from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: any;
  status = 'Please fill in the form to create Product!';
  productMain: Product = {
    id: 0,
    name: '',
    avatarProduct: '',
    description: '',
    price: 0,
    dateOfManufacture: ''
  };
  private error1: any = {
    message: 'name_product_exist'
  };
  private error2: any = {
    message: 'no_avatar_product'
  };
  private error3: any = {
    message: 'no_price_product'
  };
  private error4: any = {
    message: 'no_description_product'
  };
  private error5: any = {
    message: 'no_date_product'
  };
  private success: any = {
    message: 'successful'
  };

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.product = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      avatarProduct: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required, Validators.minLength(3), Validators.maxLength(10000)],
      price: ['', Validators.required, Validators.min(1)],
      dateOfManufacture: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.product);
  }

  createNewProduct() {
    this.productMain = this.product.value;
    console.log("avatar" + this.productMain.avatarProduct);
    console.log("name" + JSON.stringify(this.product.value));
    console.log("name" + this.product.name);
    this.productService.createProduct(this.productMain).subscribe(product => {
      if (JSON.stringify(product) == JSON.stringify(this.error1)) {
        this.status = 'The name of Product is existed! Please try again';
      }
      if (JSON.stringify(product) == JSON.stringify(this.error2)) {
        this.status = 'Please upload avatar'
      }
      if (JSON.stringify(product) == JSON.stringify(this.error3)) {
        this.status = 'Please fill product price! Try again';
      }
      if (JSON.stringify(product) == JSON.stringify(this.error4)) {
        this.status = 'Please fill the product description? Try Again';
      }
      if (JSON.stringify(product) == JSON.stringify(this.error5)) {
        this.status = 'Please fill the date of manufacture product! Try Again';
      }
      if (JSON.stringify(product) == JSON.stringify(this.success)) {
        this.status = 'create successful!';
      }
    });
  }
  onUploadAvatar($event: string): string {
    console.log($event + "event");
    this.productMain.avatarProduct = $event;
    console.log(this.product.avatarProduct + " avatar envent")
    return this.product.avatarProduct;
  }


}
