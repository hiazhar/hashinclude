import { Component, OnInit } from '@angular/core';
import { CommonfileService } from '../../services/commonfile.service'
import { HttpserviceService } from '../../services/httpservice.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data: any;
  category!: string;
  selection: any = [];
  constructor(private Common: CommonfileService, private dataservice: HttpserviceService) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.data)
  }
  select(rec: any) {
    this.Common.setData(rec);
  }
  getData() {
   this.dataservice.getData().subscribe((data) => {
      this.data=data;
    },
      (error) => {
        console.error('Error:', error);
      })
  }




}
