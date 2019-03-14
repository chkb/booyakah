import { Component, OnInit } from '@angular/core';

export interface Group {
  group1: string;
  group2: string;
  group3: string;
  group4: string;
  yearWeek1: string;
  yearWeek2: string;
}

const ELEMENT_DATA: Group[] = [
  {
    group1: 'Eshan',
    group2: 'Ludvig',
    group3: 'Cristoval',
    group4: 'Adam',
    yearWeek1: '2018 - uge: 38',
    yearWeek2: '2019 - uge: 11',
  },
  {
    group1: 'Liam',
    group2: 'Frederiks S',
    group3: 'Sedat',
    group4: 'Viktor',
    yearWeek1: '2018 - uge: 43',
    yearWeek2: '2019 - uge: 15',
  },
  {
    group1: 'Younes',
    group2: 'Nadhif',
    group3: 'Kristiyan',
    group4: 'Elouiza',
    yearWeek1: '2018 - uge: 48',
    yearWeek2: '2019 - uge: 19',
  },
  {
    group1: 'Alma',
    group2: 'Lilli Noor',
    group3: 'Samira',
    group4: 'Mille',
    yearWeek1: '2019 - uge: 2',
    yearWeek2: '2019 - uge: 2',
  },
  {
    group1: 'Maja',
    group2: 'Katharina',
    group3: 'Hiranur',
    group4: 'Frederik T',
    yearWeek1: '2019 - uge: 6',
    yearWeek2: '2019 - uge: 25',
  },
];
@Component({
  selector: 'app-workspace-dashboard',
  templateUrl: './workspace-dashboard.component.html',
  styleUrls: ['./workspace-dashboard.component.scss']
})
export class WorkspaceDashboardComponent implements OnInit {
  displayedColumns: string[] = ['group1', 'group2', 'group3', 'group4', 'yearWeek1', 'yearWeek2'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
