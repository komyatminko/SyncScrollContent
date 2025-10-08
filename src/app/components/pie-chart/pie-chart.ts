import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActiveElement, ArcElement, Chart, ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType, DoughnutController, Title, Legend, PieController, Tooltip } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.html',
  styleUrl: './pie-chart.css'
})
export class PieChart {
  @ViewChild('doughnutCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  pieChart!: Chart;

  ngAfterViewInit() {
    // 1 Register required modules for Pie chart
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    // 2 Chart configuration
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          data: [10, 20, 30, 15, 25, 5],
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
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
          title: {
            display: true,            // show the title
            text: 'My Doughnut Chart', // the header text
            font: { size: 18 },       // optional font size
            color: '#333',            // optional color
            padding: { top: 10, bottom: 30 } // optional spacing
          },
          legend: {
            position: 'left',
            labels: {
              boxWidth: 10,  // width of the color box
              boxHeight: 10, // height of the color box → same as width makes it square
              padding: 5,   // space between legend items
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        onClick: (event: ChartEvent, activeElements: ActiveElement[]) => {
          if (activeElements.length > 0) {
            const datasetIndex = activeElements[0].datasetIndex;
            const dataIndex = activeElements[0].index;
            const label = data.labels?.[dataIndex];
            const value = data.datasets[datasetIndex].data[dataIndex];
            alert(`Clicked: ${label} → ${value}`);
          }
        },
      },
    };

    // 3 Create the chart
    this.pieChart = new Chart(this.pieCanvas.nativeElement, config);
  }
}
