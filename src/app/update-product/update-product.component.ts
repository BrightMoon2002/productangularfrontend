import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  status = 'Please fill in the form to create Product!';
  private error1: any = {
    message: 'no_name'
  };
  private error2: any = {
    message: 'no_date'
  };
  private error3: any = {
    message: 'no_avatar'
  };
  private error4: any = {
    message: 'no_description'
  };
  private success: any = {
    message: 'successful'
  };
  constructor(
    private actRouter: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(ctgId =>{
      const id = +ctgId.get('id');
      console.log('id === ',id);
      this.productService.detailProduct(id).subscribe(product =>{
        this.product = product;
        console.log('category voi id', this.product);
      })
    })
  }

  onUploadAvatar($event: string) {
    this.product.avatarProduct = $event;
  }

  ngSubmit() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The name product is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'The date is required! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error3)){
        this.status = 'The avatar is required! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The description is required! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Update Success!'
      }
    })
  }

}
