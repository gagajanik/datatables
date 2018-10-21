import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from './service/app.service';
import {Product} from './objects/Product';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  dtOptions: any;
  products: Product[];
  constructor(private _app: AppService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.dtOptions = {
      'paging': true,
      'ordering': true,
      'info': true,
      'select': true,
      'responsive': true,
      'dom': 'Brtip',
      // Configure the buttons
      'buttons': [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        'pdf',
        {
          'text': 'Some button',
          'key': '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]
    };
    this.dataTable = $(this.table.nativeElement);
    setTimeout(() =>
    {this.dataTable.dataTable(this.dtOptions)}, 1000 );

  }
  getAllProducts() {
    return this._app.getAllProducts().subscribe(data => {
      return this.products = <Product[]> data['products'];
    });
  }
}
