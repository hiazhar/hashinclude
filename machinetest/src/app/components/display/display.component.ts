import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  data: any[] = Data;
  selection: any = [];
  Checklist = ['COMP_M_VIEW', 'SOP_A_VIEW', 'TEST_M_ADD', 'QS0P_V_VIEW']

  select(rec: any) {
    this.selection = rec;

  }

}
