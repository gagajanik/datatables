import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  constructor() {
  }

  ngOnInit(): void {
    this.dtOptions ={
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
    this.dataTable.dataTable(this.dtOptions);
    $(() => {
      alert(this.dataTable.rows().data);
    });
  }
}
