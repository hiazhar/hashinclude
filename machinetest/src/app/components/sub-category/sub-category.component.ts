import { Component } from '@angular/core';
import { CommonfileService } from '../../services/commonfile.service'
import { Data, subCategory } from '../../services/Data';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {
  //Checklist = ['COMP_M_VIEW', 'SOP_A_VIEW', 'TEST_M_ADD', 'QS0P_V_VIEW']
  selection!: Data;
  dump: any;
  selectedcategories: String[]=[];

  constructor(Common: CommonfileService) {
    Common.getData().subscribe((data: Data) => {
      this.selection = {
        category: data.category,
        subCategory: data.subCategory,//.filter((item: { role: string; }) => item.role == 'COMP_M_VIEW' || item.role == 'SOP_A_VIEW' || item.role == 'TEST_M_ADD' || item.role == 'QS0P_V_VIEW')
      };

      if ( data.subCategory.filter((item: { role: string; }) => item.role == 'COMP_M_VIEW' || item.role == 'SOP_A_VIEW' || item.role == 'TEST_M_ADD' || item.role == 'QS0P_V_VIEW'))
       {
        this.selectedcategories.push(data.category)
      }

    });
  }



}
