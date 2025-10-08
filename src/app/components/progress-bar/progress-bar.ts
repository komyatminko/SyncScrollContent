import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-progress-bar',
  imports: [
    NzProgressModule,
    NzGridModule,
    NzCardModule
  ],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css'
})
export class ProgressBar {

  usedDays: number = 30;
  totalDays: number = 100;
  header: string = 'Annual Leave';
  body: string = `Employees have used ${this.usedDays} days of annual leave.`
  percent: number = 0;

  ngOnInit(){
    this.percent = (this.usedDays/this.totalDays) * 100;
  }

  formatOne = (): string => `${this.usedDays}/${this.totalDays}`;
}

    
