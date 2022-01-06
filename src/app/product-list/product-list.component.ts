import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'avatarProduct', 'description', 'price', 'dateOfManufacture'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  products: Product[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct() {
    console.log('goi ham lay list');
    this.productService.getListProduct().subscribe(listProduct => {
      this.products = listProduct;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteCategory(id: number) {
    // this.productService.deleteCategoryById(id).subscribe(() => {
    //   this.getListProduct();
    // });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ressult sau khi bam nut --> ', result);
      if (result) {
        this.deleteCategory(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

}
