import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActiveElement, ArcElement, Chart, ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType, DoughnutController, Title, Legend, PieController, Tooltip } from 'chart.js';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-leave-taken-summary',
  imports: [
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    CommonModule
  ],
  templateUrl: './leave-taken-summary.html',
  styleUrl: './leave-taken-summary.css'
})
export class LeaveTakenSummary {

  @ViewChild('doughnutCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  labels: Array<string> = ['Medical Leave', 'Annual Leave', 'Off in Lieu', 'Unpaid Leave', 'Hospitalization Leave', 'Maternity Leave'];
  labelsCol2 = this.labels.slice(0, 4); // first 4 labels
  labelsCol3 = this.labels.slice(4);    // last 2 labels
  bgColor: Array<string> = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
  data: Array<number> = [10, 20, 30, 15, 25, 5];
  pieChart!: Chart;

  ngAfterViewInit() {
    // 1 Register required modules for Pie chart
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    // 2 Chart configuration
    const data = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.bgColor,
        }
      ]
    };

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: data,
      options: {
        cutout: '70%', // <-- controls doughnut thickness (default ~50%)
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
          }
        }
      },
    };

    // 3 Create the chart
    this.pieChart = new Chart(this.pieCanvas.nativeElement, config);
  }

}
